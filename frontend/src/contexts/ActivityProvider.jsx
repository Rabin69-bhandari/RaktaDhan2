import { createContext, useContext, useEffect, useState } from 'react';
import { useAuth } from './AuthProvider';
const Context=createContext();
export function ActivityProvider({children}){
 const {user}=useAuth();const demo=user?.id==='demo';const [records,setRecords]=useState([]);const [error,setError]=useState('');const [loading,setLoading]=useState(false);
 useEffect(()=>{let active=true;const controller=new AbortController();if(!user){setRecords([]);return}setLoading(true);setError('');async function load(){try{const data=demo?JSON.parse(localStorage.getItem('bloodconnect-demo-activities')||'[]'):await request('',{signal:controller.signal});if(active)setRecords(data)}catch(e){if(active&&e.name!=='AbortError')setError(e.message)}finally{if(active)setLoading(false)}}load();return()=>{active=false;controller.abort()}},[user,demo]);
 async function request(path,options={}){const r=await fetch(`/api/activity${path}`,{credentials:'include',...options});const data=await r.json();if(!r.ok)throw new Error(data.message||'Unable to save activity.');return data}
 async function add(record){let item;if(demo){item={...record,id:crypto.randomUUID(),createdAt:new Date().toISOString(),status:record.kind==='donation'?'Scheduled':'Open'};localStorage.setItem('bloodconnect-demo-activities',JSON.stringify([item,...records]))}else item=await request('',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(record)});setRecords(prev=>[item,...prev]);return item}
 async function cancel(id){let item;if(demo){item={...records.find(r=>r.id===id),status:'Cancelled'};localStorage.setItem('bloodconnect-demo-activities',JSON.stringify(records.map(r=>r.id===id?item:r)))}else item=await request(`/${id}/cancel`,{method:'PATCH'});setRecords(prev=>prev.map(r=>r.id===id?item:r))}
 return <Context.Provider value={{records,add,cancel,error,loading,demo}}>{children}</Context.Provider>
}
export const useActivity=()=>useContext(Context);
