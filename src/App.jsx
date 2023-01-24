import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
  AboutPage,
  HomePage,
  CompaniesPage,
  ErrorPage,
  AllCompanies,
  RegisterPage,
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
        </Route>
        {/* **************** */}
        <Route path="/register"element={<RegisterPage />}  />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
