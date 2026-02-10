import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ServicePage from "@/pages/ServicePage";
import "./index.css";
const onContact = () => {
  const phoneNumber = "+380123456789"; // Заміни на реальний номер телефону
  window.location.href = `tel:${phoneNumber}`;          
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/service/:id" element={<ServicePage onContact={onContact} />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
