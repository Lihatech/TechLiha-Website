import { motion } from "framer-motion";
import {
  Database,
  Cpu,
  Layers,
  BarChart3,
  LineChart,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import AutoBreadcrumb from "../components/AutoBreadcrumb";

export default function BigDataTechnology() {
  return (
    <section className="bg-white text-black">
      {/* HERO WITH KPIs */}
      <div className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <AutoBreadcrumb className="mb-5" />

            <p className="uppercase tracking-widest text-sm text-white/70">
              Technology
            </p>
            <h1 className="mt-4 text-4xl md:text-5xl font-semibold">
              Big Data Analytics Solutions
            </h1>
            <p className="mt-6 text-lg text-white/80 max-w-3xl">
              Convert massive volumes of structured and unstructured data into
              meaningful business insights using enterprise-grade analytics,
              visualization, and reporting solutions.
            </p>

            {/* KPIs */}
            <div className="grid md:grid-cols-3 gap-6 mt-14">
              <KPI title="Data Processed" value="10+ TB/day" />
              <KPI title="Insight Accuracy" value="99.9%" />
              <KPI title="Decision Speed" value="5× Faster" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* DATA PIPELINE */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-semibold mb-14">
          End-to-End Data Pipeline
        </h2>

        <div className="grid md:grid-cols-5 gap-6 items-center text-center">
          <PipelineStep icon={<Database />} title="Data Sources" />
          <Arrow />
          <PipelineStep icon={<Layers />} title="Processing" />
          <Arrow />
          <PipelineStep icon={<Cpu />} title="Analytics Engine" />
        </div>
      </div>

      {/* DASHBOARD CAPABILITIES */}
      <div className="bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h2 className="text-3xl font-semibold mb-14">
            Analytics Capabilities
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <DashboardCard
              icon={<Database />}
              title="Data Collection & Management"
              text="Automated ingestion, cleaning, and management of large-scale structured and unstructured data."
            />

            <DashboardCard
              icon={<BarChart3 />}
              title="Interactive Dashboards"
              text="Custom dashboards and real-time reports designed for business owners and analysts."
            />

            <DashboardCard
              icon={<LineChart />}
              title="Advanced Analytics"
              text="Predictive analytics, trend detection, and actionable insights powered by advanced algorithms."
            />
          </div>
        </div>
      </div>

      {/* VISUAL INSIGHTS */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-semibold mb-14">
          Data Visualization & Insights
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <InsightBlock title="Actionable Dashboards">
            Intuitive visualizations that help business leaders quickly identify
            opportunities, risks, and performance gaps.
          </InsightBlock>

          <InsightBlock title="Cross-Source Analytics">
            Unified analytics across multiple data sources, delivering a single
            source of truth for enterprise decision-making.
          </InsightBlock>

          <InsightBlock title="Real-Time Monitoring">
            Continuous monitoring of key metrics to ensure operational and
            strategic alignment.
          </InsightBlock>

          <InsightBlock title="Business Intelligence">
            Transform raw data into meaningful intelligence that drives growth
            and competitive advantage.
          </InsightBlock>
        </div>
      </div>

      {/* BUSINESS IMPACT */}
      <div className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h2 className="text-3xl font-semibold mb-14">
            Measurable Business Impact
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Faster decision-making",
              "Improved operational efficiency",
              "Better customer insights",
              "Data-driven strategy execution",
            ].map((impact, index) => (
              <div
                key={index}
                className="border border-white/20 p-6 rounded-xl"
              >
                <p className="text-lg">{impact}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Turn Data into a Strategic Asset
        </h2>
        <p className="text-black/70 max-w-2xl mx-auto mb-10">
          Our Big Data solutions empower organizations to unlock the full
          potential of their data with clarity, confidence, and control.
        </p>

        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition"
        >
          Talk to Our Data Experts <ArrowRight />
        </Link>
      </div>
    </section>
  );
}

/* Components */

function KPI({ title, value }) {
  return (
    <div className="bg-white/10 p-6 rounded-xl">
      <p className="text-white/70 text-sm">{title}</p>
      <p className="text-3xl font-semibold mt-2">{value}</p>
    </div>
  );
}

function PipelineStep({ icon, title }) {
  return (
    <div className="bg-white p-8 rounded-xl border">
      <div className="mb-4 flex justify-center">{icon}</div>
      <p className="font-semibold">{title}</p>
    </div>
  );
}

function Arrow() {
  return <span className="hidden md:block text-2xl">→</span>;
}

function DashboardCard({ icon, title, text }) {
  return (
    <div className="bg-white p-8 rounded-2xl border">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-black/70">{text}</p>
    </div>
  );
}

function InsightBlock({ title, children }) {
  return (
    <div className="border p-8 rounded-2xl">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-black/70">{children}</p>
    </div>
  );
}
