import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  AboutPage,
  HomePage,
  CompaniesPage,
  ErrorPage,
  AllCompanies,
  RegisterPage,
  ProfileUserPage,
  ProtectedUserRoutes,
  SingleCompany,
} from "./pages";
import { NavBar, Footer, MobileMenu } from "./components/layout";

const App = () => {
  return (
    <BrowserRouter>
      <MobileMenu />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* **************** */}
        <Route path="/companies" element={<CompaniesPage />}>
          <Route index element={<AllCompanies />} />
          <Route path="/companies/:id" element={<SingleCompany />} />
        </Route>
        {/* **************** */}
        <Route path="/register" element={  <RegisterPage />} />
        <Route
          path="/Profile"
          element={
            <ProtectedUserRoutes>
              <ProfileUserPage />
            </ProtectedUserRoutes>
          }
        />
        {/* **************** */}
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        theme="colored"
      />
    </BrowserRouter>
  );
};

export default App;
