import { Routes, Route, useLocation } from "react-router-dom";
import { Suspense, lazy } from "react";
import { AnimatePresence } from "framer-motion";

import Header from "./components/Header";
import Footer from "./components/Footer";
import RouteLoader from "./components/RouteLoader";
import PageTransition from "./components/PageTransition";

/* -------- Lazy Pages -------- */
const Home = lazy(() => import("./pages/Home"));
const Service = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/About"));
const Tech = lazy(() => import("./pages/Techs"));

/* -------- Service Details -------- */
const Web = lazy(() => import("./ServiceDetail/WebDetail"));
const Cloud = lazy(() => import("./ServiceDetail/CloudDetail"));

export default function App() {
  const location = useLocation();

  return (
    <>
      <Header />

      <Suspense fallback={<RouteLoader />}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageTransition>
                  <Home />
                </PageTransition>
              }
            />

            <Route
              path="/services"
              element={
                <PageTransition>
                  <Service />
                </PageTransition>
              }
            />

            <Route
              path="/contact"
              element={
                <PageTransition>
                  <Contact />
                </PageTransition>
              }
            />

            <Route
              path="/about"
              element={
                <PageTransition>
                  <About />
                </PageTransition>
              }
            />

            <Route
              path="/tech"
              element={
                <PageTransition>
                  <Tech />
                </PageTransition>
              }
            />

            <Route
              path="/services/web"
              element={
                <PageTransition>
                  <Web />
                </PageTransition>
              }
            />

            <Route
              path="/services/cloud"
              element={
                <PageTransition>
                  <Cloud />
                </PageTransition>
              }
            />
          </Routes>
        </AnimatePresence>
      </Suspense>

      <Footer />
    </>
  );
}
