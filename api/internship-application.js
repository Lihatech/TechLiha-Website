const DEFAULT_APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxd1-kEAHPPTw6UU_Uxil5Gw9mhTIYJGV94NPu2K67NLgipBTgBTsQCAc6vPK83kewG/exec";

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.status(405).json({ success: false, message: "Method not allowed" });
    return;
  }

  const data = request.body || {};
  const requiredFields = [
    "fullName",
    "email",
    "phone",
    "education",
    "college",
    "passoutYear",
    "domain",
    "skills",
  ];

  if (requiredFields.some((field) => !String(data[field] || "").trim())) {
    response.status(400).json({
      success: false,
      message: "Please complete the required fields.",
    });
    return;
  }

  const cvFile = data.cvFile;
  const allowedTypes = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];

  if (
    !cvFile ||
    !cvFile.data ||
    !allowedTypes.includes(cvFile.type) ||
    cvFile.size > 3 * 1024 * 1024
  ) {
    response.status(400).json({
      success: false,
      message: "Please upload a PDF, DOC, or DOCX resume up to 3 MB.",
    });
    return;
  }

  const env = globalThis.process?.env || {};
  const appsScriptUrl = env.GOOGLE_APPS_SCRIPT_URL || DEFAULT_APPS_SCRIPT_URL;
  const token = env.GOOGLE_APPS_SCRIPT_TOKEN;

  if (!token) {
    response.status(500).json({
      success: false,
      message: "Application service is not configured yet.",
    });
    return;
  }

  try {
    const upstream = await fetch(appsScriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, token }),
    });
    const result = await upstream.json();

    response.status(upstream.ok && result.success ? 200 : 502).json(result);
  } catch {
    response.status(502).json({
      success: false,
      message: "Could not reach the application spreadsheet.",
    });
  }
}
