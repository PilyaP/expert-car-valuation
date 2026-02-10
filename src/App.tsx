import React, { useCallback, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Hero from "@/components/Hero";
import Advantages from "@/components/Advantages";
import GeoInfo from "@/components/GeoInfo";
import ServicesSection from "@/components/ServicesSection";
import ExpertSection from "@/components/ExpertSection";
import ContactsSection from "@/components/ContactsSection";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { services } from "@/data/services";
import logo from "@/assets/logo.png";
import ServicePage from "./pages/ServicePage";




export default function App() {
  const location = useLocation();

  const scrollToSection = useCallback((sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location.pathname]);

  const mapsHref =
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(
      "смт Слобожанське, вул. Нижньодніпровська, 1, Дніпропетровська обл., Україна"
    );

  return (
    <div className="min-h-screen">
      <NavBar
        logoSrc={logo}
        onLinkClick={scrollToSection}
       
        onLogoClick={() => (window.location.href = "/")}
      />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Advantages />
              <GeoInfo mapsHref={mapsHref} />
              <ServicesSection services={services} />
              <ExpertSection />
              <ContactsSection mapsHref={mapsHref} />
            </>
          }
        />

        <Route
          path="/service/:id"
          element={<ServicePage onContact={() => scrollToSection("contacts")} />}
        />

        <Route path="*" element={<div className="p-8">404</div>} />
      </Routes>

      <Footer mapsHref={mapsHref} onServicesClick={() => scrollToSection("services")} />
    </div>
  );
}
