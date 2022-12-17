// import React from "react";
import { Navigate, Route } from "react-router-dom";

// const PrivateRoute = (props:any) => {
//   const token = localStorage.getItem("token");
//   return <>{token ? <Route {...props} /> : <Navigate to="/login" />}</>;
// };

// export default PrivateRoute;

// export type ProtectedRouteProps = {
//   isAuthenticated: boolean;
//   authenticationPath: string;
//   outlet: JSX.Element;
// };

// export default function ProtectedRoute({isAuthenticated, authenticationPath, outlet}: ProtectedRouteProps) {
//   if(isAuthenticated) {
//     return outlet;
//   } else {
//     return <Navigate to={{ pathname: authenticationPath }} />;
//   }
// };

