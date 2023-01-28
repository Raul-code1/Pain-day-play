import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedUserRoutes = ({ children }) => {
  const { user, isUserLoggedOut } = useSelector((store) => store.user);

  if ((!user && isUserLoggedOut === "logout") || !isUserLoggedOut) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedUserRoutes;
