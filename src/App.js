import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import TermsPage from "./pages/TermsPage";
import Privacy from "./pages/Privacy";
import Error from "./pages/Error";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const App = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/terms" element={<TermsPage />}></Route>
        <Route exact path="/privacy" element={<Privacy />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </>
  );
};

export default App;
