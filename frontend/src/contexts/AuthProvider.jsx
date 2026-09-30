import { useState,useEffect,createContext,useContext } from "react"

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setuser] = useState(() => { try { return JSON.parse(sessionStorage.getItem("bloodconnect-demo")) } catch { return null } })
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const fetchUser = async () =>{
            try{

                const response = await fetch('/api/auth/me',{
                    credentials : "include"
                })
                const data = await response.json()
                console.log(data)
                if (!response.ok) {
                    throw new Error(data.message || "Something went wrong");
                }
                setuser(data)
            }catch(error){
                setuser(null)
            }finally{
                setLoading(false)
            }
        }

        if (sessionStorage.getItem("bloodconnect-demo")) setLoading(false); else fetchUser()
     
    }, [])
    

  return (
     <AuthContext.Provider
      value={{
        user,
        setuser,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = ()=> useContext(AuthContext)