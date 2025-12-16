import { Routes, Route, useLocation } from "react-router-dom";
import { Suspense, lazy } from "react";
import { AnimatePresence } from "framer-motion";

import RouteLoader from "./components/RouteLoader";
import PageTransition from "./components/PageTransition";
import ScrollToTop from "./components/ScrollToTop";
import MainLayout from "./layout/MainLayout";

// Service Details
import BigDataServicePage from "./ServiceDetail/BigDataServDetail";
import AiDataSci from "./ServiceDetail/AiDataSciServDetail";
import Mobile from "./ServiceDetail/AndroidServDetail";
import CyberSecurityServicePage from "./ServiceDetail/CyberSecurityServicePage";
import AwsServiceDetail from "./ServiceDetail/AwsServiceDetail";
import QaTestingServicePage from "./ServiceDetail/QaTestingServicePage";
import EnterpriseServicePage from "./ServiceDetail/EnterpriseServicePage.jsx";
import DevOpsServicePage from "./ServiceDetail/DevOpsServicePage.jsx";

/* -------- Lazy Pages -------- */
const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/About"));
const Tech = lazy(() => import("./pages/Techs"));
const NotFound = lazy(() => import("./pages/NotFoundPage"));

/* -------- Service Details -------- */
const Web = lazy(() => import("./ServiceDetail/WebDetail"));
const Cloud = lazy(() => import("./ServiceDetail/CloudDetail"));

/* -------- Tech Details -------- */
const Python = lazy(() => import("./TechDetails/PyDetail"));
const Java = lazy(() => import("./TechDetails/JavaDetail"));
const Bdata = lazy(() => import("./TechDetails/BigDataDetail"));
const Php = lazy(() => import("./TechDetails/PhpDetail"));
const Angular = lazy(() => import("./TechDetails/AngularDetail"));
const Sap = lazy(() => import("./TechDetails/SapDetail"));

export default function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />

      <Suspense fallback={<RouteLoader />}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route element={<MainLayout />}>
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
                    <Services />
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

              {/* Service Routes */}
              <Route path="/services/web" element={<PageTransition><Web /></PageTransition>} />
              <Route path="/services/cloud-migration" element={<PageTransition><Cloud /></PageTransition>} />
              <Route path="/services/big-data" element={<PageTransition><BigDataServicePage /></PageTransition>} />
              <Route path="/services/ai-data-science" element={<PageTransition><AiDataSci /></PageTransition>} />
              <Route path="/services/mobile" element={<PageTransition><Mobile /></PageTransition>} />
              <Route path="/services/cyber-security" element={<PageTransition><CyberSecurityServicePage /></PageTransition>} />
              <Route path="/services/aws" element={<PageTransition><AwsServiceDetail /></PageTransition>} />
              <Route path="/services/qa-testing" element={<PageTransition><QaTestingServicePage /></PageTransition>} />
              <Route path="/services/enterprise-solutions" element={<PageTransition><EnterpriseServicePage /></PageTransition>} />
              <Route path="/services/devops" element={<PageTransition><DevOpsServicePage /></PageTransition>} />

              {/* Tech Routes */}
              <Route path="/tech/python" element={<PageTransition><Python /></PageTransition>} />
              <Route path="/tech/java" element={<PageTransition><Java /></PageTransition>} />
              <Route path="/tech/big-data" element={<PageTransition><Bdata /></PageTransition>} />
              <Route path="/tech/php" element={<PageTransition><Php /></PageTransition>} />
              <Route path="/tech/angular" element={<PageTransition><Angular /></PageTransition>} />
              <Route path="/tech/sap" element={<PageTransition><Sap /></PageTransition>} />

              {/* 404 */}
              <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
            </Route>
          </Routes>
        </AnimatePresence>
      </Suspense>
    </>
  );
}
