// src/layout/MainLayout.jsx
import { useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MarketingSky from "../features/parallax/MarketingSky";
import "../styles/site-shell.css";
import "../styles/shared-motion.css";

export default function MainLayout() {
  const pageRef = useRef(null);

  useEffect(() => {
    document.body.classList.add("marketing-page-active");
    return () => document.body.classList.remove("marketing-page-active");
  }, []);

  return (
    <div ref={pageRef} className="marketing-page" id="top">
      <MarketingSky pageRef={pageRef} />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
