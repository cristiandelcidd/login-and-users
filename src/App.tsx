import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import "./App.css";

import { LoginPage } from "./pages";
import { Spinner } from "./components";

import { PrivateRoute, PublicRoute } from "./routes";
const UsersPage = lazy(() => import("./pages/UsersPage"));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />

        <Route
          path="/"
          element={
            <PrivateRoute>
              <Suspense fallback={<Spinner />}>
                <UsersPage />
              </Suspense>
            </PrivateRoute>
          }
        />

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
