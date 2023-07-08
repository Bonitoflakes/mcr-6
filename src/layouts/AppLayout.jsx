import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";

export const AppLayout = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<h1>404 Not found</h1>} />
    </Routes>
  );
};
