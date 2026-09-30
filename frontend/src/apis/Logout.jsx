
const baseURL =  ""


const Logout= async ()=>{

    const response = await fetch(`${baseURL}/api/auth/logout`,{
        method: "POST",
        credentials : "include",
    headers: {
      "Content-Type": "application/json"
    },
    })

    const data = await response.json()
    
   return data

}


export {Logout}