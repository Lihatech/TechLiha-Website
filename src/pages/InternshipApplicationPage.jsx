import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { PageHero } from "../components/MarketingPagePrimitives";
import "../styles/global.css";
import "../styles/site-shell.css";
import "../styles/marketing-pages.css";

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  location: "",
  education: "",
  college: "",
  passoutYear: "",
  domain: "",
  skills: "",
  cvFile: null,
  motivation: "",
  consent: false,
};

export default function InternshipApplicationPage() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const updateField = (event) => {
    const { name, value, type, checked } = event.target;
    setForm((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : type === "file" ? event.target.files?.[0] || null : value,
    }));
  };

  const submitApplication = async (event) => {
    event.preventDefault();
    setStatus({ type: "idle", message: "" });

    if (!form.consent) {
      setStatus({
        type: "error",
        message: "Please confirm that you agree to the application data being reviewed.",
      });
      return;
    }

    if (!form.cvFile) {
      setStatus({ type: "error", message: "Please upload your resume." });
      return;
    }

    setStatus({ type: "loading", message: "Submitting your application…" });

    try {
      const cvData = await readFileAsBase64(form.cvFile);
      const response = await fetch("/api/internship-application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          cvFile: {
            name: form.cvFile.name,
            type: form.cvFile.type,
            size: form.cvFile.size,
            data: cvData,
          },
        }),
      });
      const rawResponse = await response.text();
      let result;

      try {
        result = rawResponse ? JSON.parse(rawResponse) : null;
      } catch {
        throw new Error("The application service returned an invalid response.");
      }

      if (!response.ok || !result?.success) {
        throw new Error(
          result?.message ||
            `Unable to submit your application (${response.status || "unknown error"}).`,
        );
      }

      setSubmitted(true);
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Unable to submit your application. Please try again.",
      });
    }
  };

  return (
    <div className="marketing-page internship-page">
      <PageHero
        eyebrow="INTERNSHIP APPLICATION"
        title="Start with a real problem."
        accent="Build something useful."
        copy="Tell us what you are learning, what you want to practice, and where you would like to contribute."
        backLink={{ to: "/", label: "Back to home" }}
      />

      <section className="marketing-section">
        <div className="marketing-shell internship-form-wrap">
          <div className="internship-form-card">
            {submitted ? (
              <div className="internship-form__success">
                <h2>Application received.</h2>
                <p>
                  Thank you for applying. Our team will review your details and
                  contact you if there is a suitable next step.
                </p>
                <Link className="marketing-button marketing-button--primary" to="/">
                  Back to home <ArrowRight size={17} aria-hidden="true" />
                </Link>
              </div>
            ) : (
              <form className="internship-form" onSubmit={submitApplication}>
                <div className="internship-form__grid">
                  <Field label="Full name" name="fullName" value={form.fullName} onChange={updateField} required />
                  <Field label="Email address" name="email" type="email" value={form.email} onChange={updateField} required />
                  <Field label="Phone / WhatsApp" name="phone" value={form.phone} onChange={updateField} required />
                  <Field label="Location" name="location" value={form.location} onChange={updateField} required />
                  <Field label="Education / Degree & Branch" name="education" value={form.education} onChange={updateField} placeholder="Example: B.Tech (AI/ML)" required />
                  <Field label="College" name="college" value={form.college} onChange={updateField} required />
                  <Field label="Passout year" name="passoutYear" type="number" min="1950" max={new Date().getFullYear() + 1} value={form.passoutYear} onChange={updateField} placeholder="Example: 2026" required />
                  <div className="internship-form__field">
                    <FormLabel htmlFor="domain" required>Domain</FormLabel>
                    <select id="domain" name="domain" value={form.domain} onChange={updateField} required>
                      <option value="">Select a domain</option>
                      <option>Software Development</option>
                      <option>AI & ML Engineer</option>
                    </select>
                  </div>
                  <div className="internship-form__field">
                    <FormLabel htmlFor="cvFile" required>Resume / CV</FormLabel>
                    <input
                      id="cvFile"
                      name="cvFile"
                      type="file"
                      accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                      onChange={updateField}
                      required
                    />
                    <small className="internship-form__hint">
                      PDF, DOC, or DOCX. Maximum 3 MB.
                      {form.cvFile ? ` Selected: ${form.cvFile.name}` : ""}
                    </small>
                  </div>
                  <Field className="internship-form__field--full" label="Skills" name="skills" value={form.skills} onChange={updateField} placeholder="Example: React, Python, SQL, Figma" required />
                  <Field className="internship-form__field--full" label="Why do you want to join us? (Optional)" name="motivation" value={form.motivation} onChange={updateField} as="textarea" />
                </div>

                <label className="internship-form__consent">
                  <input type="checkbox" name="consent" checked={form.consent} onChange={updateField} />
                  <span>I agree that Techliha may review these details for internship selection.<span className="required-star" aria-hidden="true">*</span></span>
                </label>

                {status.message && (
                  <p className={`internship-form__status${status.type === "error" ? " internship-form__status--error" : ""}`} role="status">
                    {status.message}
                  </p>
                )}

                <button className="marketing-button marketing-button--primary" type="submit" disabled={status.type === "loading"}>
                  {status.type === "loading" ? "Submitting…" : "Submit application"}
                  <ArrowRight size={17} aria-hidden="true" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({ label, name, value, onChange, type = "text", as = "input", className = "", ...props }) {
  const Component = as;
  const required = Boolean(props.required);

  return (
    <div className={`internship-form__field ${className}`}>
      <FormLabel htmlFor={name} required={required}>{label}</FormLabel>
      <Component id={name} name={name} type={as === "input" ? type : undefined} value={value} onChange={onChange} {...props} />
    </div>
  );
}

function FormLabel({ children, required = false, ...props }) {
  return (
    <label {...props}>
      {children}
      {required && <span className="required-star" aria-hidden="true">*</span>}
    </label>
  );
}

function readFileAsBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result).split(",")[1] || "");
    reader.onerror = () => reject(new Error("Could not read the resume file."));
    reader.readAsDataURL(file);
  });
}
