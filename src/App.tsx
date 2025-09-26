import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ServicePage from "../pages/ServicePage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/service/:id" element={<ServicePage />} />
      <Route path="*" element={<div className="p-8">404</div>} />
    </Routes>
  );
}
