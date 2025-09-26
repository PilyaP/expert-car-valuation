import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import logoImage from "@/assets/logo.png";
import { Menu, X } from "lucide-react";
import NavBar from "./NavBar";

export default function Layout() {
  const [open, setOpen] = useState(false);

  const navClick = (hash: string) => {
    if (location.pathname !== "/") {
      // если мы не на главной – уйдём на неё, а якорь сработает после рендера
      location.href = `/${hash}`;
      return;
    }
    document.getElementById(hash.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <div className="min-h-screen">
      {/* NAV */}


          {/* где рисуются страницы */}
              
          <div className="pt-20">
                  
        <Outlet />
      </div>

      {/* FOOTER (всегда) */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <p className="text-gray-400 text-sm">© 2025 Пилипенко А.І. Всі права захищені.</p>
        </div>
      </footer>
    </div>
  );
}
