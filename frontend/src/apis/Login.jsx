
const baseURL =  ""


const Login = async (userData)=>{

    const response = await fetch(`${baseURL}/api/auth/login`,{
        method: "POST",
        credentials : "include",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userData)
    })

    const data = await response.json()
    if(!response.ok) throw new Error(data.message || 'Unable to sign in');
    
   return data

}


export {Login}