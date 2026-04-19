import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./pages/Login/Login";
import { Dashboard } from "./pages/Dashbord/Dashboard";
import { SaaSAdmin } from "./pages/Admin/SaaSAdmin";

function PrivateRoute({ children }: { children: JSX.Element }) {
  const token = localStorage.getItem("barber:token");
  return token ? children : <Navigate to="/" replace />;
}

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />

      <Route
        path="/saas"
        element={
          <PrivateRoute>
            <SaaSAdmin />
          </PrivateRoute>
        }
      />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
