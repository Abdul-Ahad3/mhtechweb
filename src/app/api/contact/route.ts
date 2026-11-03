import { Resend } from "resend";

const MAX_BODY_BYTES = 16_384;
const PROJECT_TYPES: Record<string, string> = {
  "hardware-pcb": "Hardware & PCB Development",
  "iot-embedded": "IoT & Embedded Systems",
  "ai-vision": "AI & Computer Vision",
  "web-development": "Web Development",
  "mobile-app": "Mobile App Development",
  "game-development": "Game Development",
  other: "Other",
};

type ContactData = {
  fullName: string;
  email: string;
  subject: string;
  projectType: string;
  message: string;
};

function cleanText(value: unknown, multiline = false): string | null {
  if (typeof value !== "string") return null;

  const withoutControls = multiline
    ? value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F-\u009F]/g, "")
    : value.replace(/[\u0000-\u001F\u007F-\u009F]/g, "");

  return multiline
    ? withoutControls.replace(/\r\n?/g, "\n").trim()
    : withoutControls.replace(/\s+/g, " ").trim();
}

function badRequest(message: string, status = 400) {
  return Response.json({ error: message }, { status });
}

export async function POST(request: Request) {
  if (!request.headers.get("content-type")?.startsWith("application/json")) {
    return badRequest("Please submit the form using a valid request.", 415);
  }

  const contentLength = Number(request.headers.get("content-length"));
  if (Number.isFinite(contentLength) && contentLength > MAX_BODY_BYTES) {
    return badRequest(
      "Your message is too large. Please shorten it and try again.",
      413,
    );
  }

  let rawBody: string;
  try {
    rawBody = await request.text();
  } catch {
    return badRequest("The form request could not be read.");
  }

  if (new TextEncoder().encode(rawBody).byteLength > MAX_BODY_BYTES) {
    return badRequest(
      "Your message is too large. Please shorten it and try again.",
      413,
    );
  }

  let body: unknown;
  try {
    body = JSON.parse(rawBody);
  } catch {
    return badRequest("The form request is not valid JSON.");
  }

  if (typeof body !== "object" || body === null || Array.isArray(body)) {
    return badRequest("Please submit valid contact details.");
  }

  const input = body as Record<string, unknown>;
  const fullName = cleanText(input.fullName);
  const email = cleanText(input.email);
  const subject = cleanText(input.subject);
  const projectType =
    input.projectType === undefined ? "" : cleanText(input.projectType);
  const message = cleanText(input.message, true);

  if (
    !fullName ||
    !email ||
    !subject ||
    !message ||
    fullName.length > 120 ||
    email.length > 254 ||
    subject.length > 200 ||
    projectType === null ||
    projectType.length > 40 ||
    message.length > 5000
  ) {
    return badRequest(
      "Please check that all required fields are filled in and within the allowed length.",
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return badRequest("Please enter a valid email address.");
  }

  if (projectType && !Object.hasOwn(PROJECT_TYPES, projectType)) {
    return badRequest("Please select a valid project type.");
  }

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_EMAIL?.trim();
  if (
    !apiKey ||
    !recipient ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(recipient)
  ) {
    return badRequest(
      "The contact service is temporarily unavailable. Please try again later.",
      503,
    );
  }

  const contact: ContactData = {
    fullName,
    email,
    subject,
    projectType,
    message,
  };
  const projectLabel = PROJECT_TYPES[contact.projectType] ?? "Not specified";

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: "MHTechFusion <onboarding@resend.dev>",
      to: [recipient],
      replyTo: contact.email,
      subject: `Contact form: ${contact.subject}`,
      text: [
        `Name: ${contact.fullName}`,
        `Email: ${contact.email}`,
        `Project type: ${projectLabel}`,
        "",
        "Message:",
        contact.message,
      ].join("\n"),
    });

    if (error) {
      return badRequest(
        "We couldn’t send your message right now. Please try again later.",
        502,
      );
    }
  } catch {
    return badRequest(
      "We couldn’t send your message right now. Please try again later.",
      502,
    );
  }

  return Response.json({ ok: true });
}
