import { Navigate, Outlet } from "react-router-dom";

export default function PublicRoute() {
  const user = JSON.parse(localStorage.getItem("loginResponse") || "{}");
  const isAuthenticated = !!user.token;
  console.log(isAuthenticated);

  return isAuthenticated ? <Navigate to="/" /> : <Outlet />;
}
