
const baseURL =  ""


const Register = async (userData)=>{


  try{

      const response = await fetch(`${baseURL}/api/auth/register`,{
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
    }catch(error){
        console.log(error)
        return error
    }

}


export {Register}