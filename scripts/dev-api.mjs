import { createServer } from "node:http";
import { readFileSync } from "node:fs";

const PORT = 8787;
const MAX_BODY_SIZE = 8 * 1024 * 1024;
const env = loadEnv();
const appsScriptUrl = env.GOOGLE_APPS_SCRIPT_URL;
const token = env.GOOGLE_APPS_SCRIPT_TOKEN;

if (!appsScriptUrl || !token || token.includes("replace-with")) {
  console.error("Missing GOOGLE_APPS_SCRIPT_URL or GOOGLE_APPS_SCRIPT_TOKEN in .env");
  process.exit(1);
}

const server = createServer(async (request, response) => {
  if (request.method === "OPTIONS") {
    response.writeHead(204);
    response.end();
    return;
  }

  if (request.method !== "POST" || request.url !== "/api/internship-application") {
    sendJson(response, 404, { success: false, message: "Not found" });
    return;
  }

  try {
    const data = await readJson(request);
    const requiredFields = [
      "fullName",
      "email",
      "phone",
      "location",
      "education",
      "college",
      "passoutYear",
      "domain",
      "skills",
    ];
    const cvFile = data.cvFile;
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (requiredFields.some((field) => !String(data[field] || "").trim())) {
      sendJson(response, 400, { success: false, message: "Please complete the required fields." });
      return;
    }

    if (!cvFile?.data || !allowedTypes.includes(cvFile.type) || cvFile.size > 3 * 1024 * 1024) {
      sendJson(response, 400, { success: false, message: "Please upload a PDF, DOC, or DOCX resume up to 3 MB." });
      return;
    }

    const upstream = await fetch(appsScriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, token }),
    });
    const raw = await upstream.text();
    let result;

    try {
      result = raw ? JSON.parse(raw) : { success: false, message: "Empty response from Apps Script" };
    } catch {
      result = { success: false, message: "Invalid response from Apps Script" };
    }

    if (!upstream.ok || !result.success) {
      console.error("Apps Script response:", upstream.status, raw.slice(0, 1000));
    }

    sendJson(response, upstream.ok && result.success ? 200 : 502, result);
  } catch (error) {
    sendJson(response, 400, { success: false, message: error.message || "Invalid request" });
  }
});

server.listen(PORT, () => {
  console.log(`Local API ready at http://localhost:${PORT}`);
});

function loadEnv() {
  const values = {};
  const text = readFileSync(".env", "utf8");

  for (const line of text.split(/\r?\n/)) {
    const match = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (!match) continue;
    values[match[1]] = match[2].replace(/^['"]|['"]$/g, "");
  }

  return values;
}

function readJson(request) {
  return new Promise((resolve, reject) => {
    let body = "";

    request.on("data", (chunk) => {
      body += chunk;
      if (Buffer.byteLength(body) > MAX_BODY_SIZE) {
        reject(new Error("Request is too large."));
        request.destroy();
      }
    });

    request.on("end", () => {
      try {
        resolve(JSON.parse(body || "{}"));
      } catch {
        reject(new Error("Invalid JSON request."));
      }
    });

    request.on("error", reject);
  });
}

function sendJson(response, status, data) {
  response.writeHead(status, { "Content-Type": "application/json" });
  response.end(JSON.stringify(data));
}
