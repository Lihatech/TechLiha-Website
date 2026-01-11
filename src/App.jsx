// App.jsx
import { Routes, Route, useLocation } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { ErrorBoundary } from "react-error-boundary";

import RouteLoader from "./components/RouteLoader";
import PageTransition from "./components/PageTransition";
import ScrollToTop from "./components/ScrollToTop";
import MainLayout from "./layout/MainLayout";
import ScrollToTopButton from "./components/ScrollToTopButton";
import { Analytics } from "@vercel/analytics/next";

/* ---------------- Lazy Pages ---------------- */
const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/About"));
const Tech = lazy(() => import("./pages/Techs"));
const NotFound = lazy(() => import("./pages/NotFoundPage"));

/* ---------------- Service Details ---------------- */
const Web = lazy(() => import("./ServiceDetail/WebDetail"));
const Cloud = lazy(() => import("./ServiceDetail/CloudDetail"));
const BigDataServicePage = lazy(() =>
  import("./ServiceDetail/BigDataServDetail")
);
const AiDataSci = lazy(() => import("./ServiceDetail/AiDataSciServDetail"));
const Mobile = lazy(() => import("./ServiceDetail/AndroidServDetail"));
const CyberSecurityServicePage = lazy(() =>
  import("./ServiceDetail/CyberSecurityServicePage")
);
const AwsServiceDetail = lazy(() => import("./ServiceDetail/AwsServiceDetail"));
const QaTestingServicePage = lazy(() =>
  import("./ServiceDetail/QaTestingServicePage")
);
const EnterpriseServicePage = lazy(() =>
  import("./ServiceDetail/EnterpriseServicePage")
);
const DevOpsServicePage = lazy(() =>
  import("./ServiceDetail/DevOpsServicePage")
);

/* ---------------- Tech Details ---------------- */
const Python = lazy(() => import("./TechDetails/PyDetail"));
const Java = lazy(() => import("./TechDetails/JavaDetail"));
const Bdata = lazy(() => import("./TechDetails/BigDataDetail"));
const Php = lazy(() => import("./TechDetails/PhpDetail"));
const Angular = lazy(() => import("./TechDetails/AngularDetail"));
const Sap = lazy(() => import("./TechDetails/SapDetail"));
const DevOps = lazy(() => import("./TechDetails/DevOpsDetail"));
const Ai = lazy(() => import("./TechDetails/AiDetail"));

/* ---------------- Route Configuration ---------------- */
const routes = [
  { path: "/", component: Home, title: "Home" },
  { path: "/services", component: Services, title: "Our Services" },
  { path: "/contact", component: Contact, title: "Contact Us" },
  { path: "/about", component: About, title: "About Us" },
  { path: "/tech", component: Tech, title: "Technologies" },

  { path: "/services/web", component: Web, title: "Web Development" },
  {
    path: "/services/cloud-migration",
    component: Cloud,
    title: "Cloud Migration & Development",
  },
  {
    path: "/services/big-data",
    component: BigDataServicePage,
    title: "Big Data Solutions",
  },
  {
    path: "/services/ai-data-science",
    component: AiDataSci,
    title: "AI & Data Science Development",
  },
  {
    path: "/services/mobile",
    component: Mobile,
    title: "Android App Development",
  },
  {
    path: "/services/cyber-security",
    component: CyberSecurityServicePage,
    title: "Cyber Security Solutions",
  },
  {
    path: "/services/aws",
    component: AwsServiceDetail,
    title: "AWS Development",
  },
  {
    path: "/services/qa-testing",
    component: QaTestingServicePage,
    title: "QA & Testing Services",
  },
  {
    path: "/services/enterprise-solutions",
    component: EnterpriseServicePage,
    title: "Enterprise Solutions Development",
  },
  {
    path: "/services/devops",
    component: DevOpsServicePage,
    title: "DevOps Services",
  },

  { path: "/tech/python", component: Python, title: "Python" },
  { path: "/tech/java", component: Java, title: "Java" },
  { path: "/tech/big-data", component: Bdata, title: "Big Data" },
  { path: "/tech/php", component: Php, title: "PHP" },
  { path: "/tech/angular", component: Angular, title: "Angular" },
  { path: "/tech/sap", component: Sap, title: "SAP" },
  { path: "/tech/devops", component: DevOps, title: "DevOps" },
  { path: "/tech/ai", component: Ai, title: "AI" },
];

/* ---------------- SEO Helper ---------------- */
function SEO({ title, description }) {
  useEffect(() => {
    document.title = title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }

    metaDesc.content = description || title;
  }, [title, description]);

  return null;
}

/* ---------------- App ---------------- */
export default function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />

      <ErrorBoundary
        fallback={
          <div className="min-h-screen flex items-center justify-center text-center">
            <div>
              <h1 className="text-2xl font-semibold mb-2">
                Something went wrong
              </h1>
              <button
                onClick={() => window.location.reload()}
                className="underline"
              >
                Reload Page
              </button>
            </div>
          </div>
        }
      >
        <Suspense fallback={<RouteLoader />}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route element={<MainLayout />}>
                {routes.map(({ path, component: Component, title }) => (
                  <Route
                    key={path}
                    path={path}
                    element={
                      <PageTransition>
                        <SEO title={`${title} | LihaTech.com`} />
                        <Component />
                      </PageTransition>
                    }
                  />
                ))}

                {/* 404 */}
                <Route
                  path="*"
                  element={
                    <PageTransition>
                      <SEO title="404 - Page Not Found | LihaTech.com" />
                      <NotFound />
                    </PageTransition>
                  }
                />
              </Route>
            </Routes>
          </AnimatePresence>
        </Suspense>
      </ErrorBoundary>
      <Analytics />
      <ScrollToTopButton />
    </>
  );
}
