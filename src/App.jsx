// App.jsx
import { Navigate, Routes, Route, useLocation } from "react-router-dom";
import { Suspense, createElement, lazy, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { ErrorBoundary } from "react-error-boundary";

import RouteLoader from "./components/RouteLoader";
import PageTransition from "./components/PageTransition";
import ScrollToTop from "./components/ScrollToTop";
import LiquidGlassSystem from "./components/LiquidGlassSystem";
import MainLayout from "./layout/MainLayout";
import ScrollToTopButton from "./components/ScrollToTopButton";
import { Analytics } from "@vercel/analytics/react";

/* ---------------- Lazy Pages ---------------- */
const NotFound = lazy(() => import("./pages/NotFoundPage"));
const HomePage = lazy(() => import("./pages/HomePage"));
const Solutions = lazy(() => import("./pages/SolutionsPage"));
const Work = lazy(() => import("./pages/WorkPage"));
const Technology = lazy(() => import("./pages/TechnologyPage"));
const Training = lazy(() => import("./pages/TrainingPage"));
const Course = lazy(() => import("./pages/CoursePage"));
const Internship = lazy(() => import("./pages/InternshipPage"));
const About = lazy(() => import("./pages/AboutPage"));
const Contact = lazy(() => import("./pages/ContactPage"));

/* ---------------- Service Details ---------------- */
const Web = lazy(() =>
  import("./features/services/WebDevelopmentDetailPage")
);
const Cloud = lazy(() =>
  import("./features/services/CloudMigrationDetailPage")
);
const BigDataServicePage = lazy(() =>
  import("./features/services/BigDataDetailPage")
);
const AiDataSci = lazy(() =>
  import("./features/services/AiDataScienceDetailPage")
);
const Mobile = lazy(() =>
  import("./features/services/MobileAppDetailPage")
);
const CyberSecurityServicePage = lazy(() =>
  import("./features/services/CyberSecurityDetailPage")
);
const AwsServiceDetail = lazy(() =>
  import("./features/services/AwsDetailPage")
);
const QaTestingServicePage = lazy(() =>
  import("./features/services/QaTestingDetailPage")
);
const EnterpriseServicePage = lazy(() =>
  import("./features/services/EnterpriseSolutionsDetailPage")
);
const DevOpsServicePage = lazy(() =>
  import("./features/services/DevOpsDetailPage")
);

/* ---------------- Tech Details ---------------- */
const Python = lazy(() =>
  import("./features/technologies/PythonDetailPage")
);
const Java = lazy(() => import("./features/technologies/JavaDetailPage"));
const Bdata = lazy(() =>
  import("./features/technologies/BigDataDetailPage")
);
const Php = lazy(() => import("./features/technologies/PhpDetailPage"));
const Angular = lazy(() =>
  import("./features/technologies/AngularDetailPage")
);
const Sap = lazy(() => import("./features/technologies/SapDetailPage"));
const DevOps = lazy(() =>
  import("./features/technologies/DevOpsDetailPage")
);
const Ai = lazy(() => import("./features/technologies/AiDetailPage"));

/* ---------------- Route Configuration ---------------- */
const routes = [
  { path: "/solutions", component: Solutions, title: "AI & Software Solutions" },
  { path: "/work", component: Work, title: "Selected Work" },
  { path: "/technology", component: Technology, title: "Technology" },
  { path: "/training", component: Training, title: "Agentic AI Training" },
  { path: "/training/course", component: Course, title: "Agentic AI Course" },
  {
    path: "/training/internship",
    component: Internship,
    title: "Agentic AI Internship",
  },
  { path: "/contact", component: Contact, title: "Contact Us" },
  { path: "/about", component: About, title: "About Us" },

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
      <LiquidGlassSystem />

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
              <Route
                path="/"
                element={
                  <PageTransition>
                    <SEO
                      title="AI Solutions, Software & Agentic AI Training | LihaTech"
                      description="LihaTech builds intelligent digital products and provides practical Agentic AI courses and internships."
                    />
                    <HomePage />
                  </PageTransition>
                }
              />
              <Route path="/parallax-lab" element={<Navigate to="/" replace />} />
              <Route element={<MainLayout />}>
                <Route path="/services" element={<Navigate to="/solutions" replace />} />
                <Route path="/tech" element={<Navigate to="/technology" replace />} />
                {routes.map(({ path, component, title }) => (
                  <Route
                    key={path}
                    path={path}
                    element={
                      <PageTransition>
                        <SEO title={`${title} | LihaTech.com`} />
                        {createElement(component)}
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
