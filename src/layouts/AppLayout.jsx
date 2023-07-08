import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Restaurant } from "../pages/Restaurant";

export const AppLayout = () => {
  return (
    <div className="min-h-screen p-5">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants/:restaurantID" element={<Restaurant />} />
        <Route path="*" element={<h1>404 Not found</h1>} />
      </Routes>
    </div>
  );
};
