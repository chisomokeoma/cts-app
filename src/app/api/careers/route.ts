import nodemailer from "nodemailer";

const RECIPIENT = process.env.CAREERS_TO_EMAIL ?? process.env.CONTACT_TO_EMAIL ?? process.env.HOSTINGER_EMAIL;

function value(formData: FormData, name: string) {
  const field = formData.get(name);
  return typeof field === "string" ? field.trim() : "";
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const name = value(formData, "name");
  const email = value(formData, "email");
  const role = value(formData, "role");
  const about = value(formData, "about");
  const updates = formData.get("updates") === "on";

  if (!name || !email || !role) {
    return Response.json({ error: "Please complete your name, email address, and role." }, { status: 400 });
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
      from: `Miller Larkin Careers <${process.env.HOSTINGER_EMAIL}>`,
      to: RECIPIENT,
      replyTo: email,
      subject: `Careers application from ${name}`,
      text: ["New Miller Larkin careers application", "", `Name: ${name}`, `Email: ${email}`, `Role: ${role}`, `Wants updates: ${updates ? "Yes" : "No"}`, "", "About:", about || "No additional information provided."].join("\n"),
    });
  } catch {
    return Response.json({ error: "We could not send your application. Please try again shortly." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
