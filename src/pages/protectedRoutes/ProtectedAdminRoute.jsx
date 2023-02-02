import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const ProtectedAdminRoute = ({children}) => {

    const{user ,isUserLoggedOut}=useSelector((store)=>store.user)


    if((!user && isUserLoggedOut === "logout") || !isUserLoggedOut ){
            return <Navigate to='/' />
    }
    
    if (user.user.role==='user'){
        return <Navigate to='/' />
    }

  return children;
}

export default ProtectedAdminRoute
