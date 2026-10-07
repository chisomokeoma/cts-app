import nodemailer from "nodemailer";

const RECIPIENT = process.env.CONTACT_TO_EMAIL ?? process.env.HOSTINGER_EMAIL;

function value(formData: FormData, name: string) {
  const field = formData.get(name);
  return typeof field === "string" ? field.trim() : "";
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const email = value(formData, "email");
  const company = value(formData, "company");
  const sector = value(formData, "sector");
  const message = value(formData, "message");
  const updates = formData.get("updates") === "on";

  if (!email || !company || !sector) {
    return Response.json({ error: "Please complete your email address, company name, and sector." }, { status: 400 });
  }

  if (!process.env.HOSTINGER_EMAIL || !process.env.HOSTINGER_PASSWORD || !RECIPIENT) {
    return Response.json({ error: "Email delivery has not been configured yet." }, { status: 503 });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.HOSTINGER_SMTP_HOST ?? "smtp.hostinger.com",
    port: Number(process.env.HOSTINGER_SMTP_PORT ?? 465),
    secure: true,
    auth: {
      user: process.env.HOSTINGER_EMAIL,
      pass: process.env.HOSTINGER_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `Miller Larkin Contact <${process.env.HOSTINGER_EMAIL}>`,
      to: RECIPIENT,
      replyTo: email,
      subject: `Contact request from ${company}`,
      text: ["New Miller Larkin contact request", "", `Company: ${company}`, `Email: ${email}`, `Sector: ${sector}`, `Wants updates: ${updates ? "Yes" : "No"}`, "", "Message:", message || "No additional message provided."].join("\n"),
    });
  } catch {
    return Response.json({ error: "We could not send your message. Please try again shortly." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
