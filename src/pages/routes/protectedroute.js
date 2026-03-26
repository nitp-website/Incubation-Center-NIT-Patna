import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/authcontext";

const ProtectedRoute = ({ children, allowedRoles }) => {

  const { user } = useAuth();

  const token = localStorage.getItem("accessToken");
  const role = localStorage.getItem("role");

  if (!user && !token) {
    return <Navigate to="/admin" replace />;
  }

  // ✅ role check
  if (allowedRoles && role && !allowedRoles.includes(role)) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;