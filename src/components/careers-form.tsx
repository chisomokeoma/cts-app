"use client";

import { FormEvent, useState } from "react";

const ROLES = ["Data analyst", "Research analyst", "Software developer", "Engineer", "Student", "Other"];

export function CareersForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    setMessage("");
    const response = await fetch("/api/careers", { method: "POST", body: new FormData(form) });
    const result = (await response.json()) as { error?: string };
    if (!response.ok) {
      setStatus("error");
      setMessage(result.error ?? "We could not send your application. Please try again shortly.");
      return;
    }
    form.reset();
    setStatus("success");
    setMessage("Thanks — your application has been sent.");
  }

  return (
    <form className="mx-auto flex w-full max-w-[474px] flex-col" onSubmit={submit}>
      <label className="mb-[7px] text-[14px] leading-[18px]" htmlFor="name">Full name</label>
      <input className="h-[48px] border border-black/5 bg-[#f5f5f5] px-[15px] text-[13px] outline-none placeholder:text-[#737373] focus:border-black/40" id="name" name="name" type="text" placeholder="Enter your full name" required />
      <label className="mt-[23px] mb-[7px] text-[14px] leading-[18px]" htmlFor="email">Email address</label>
      <input className="h-[48px] border border-black/5 bg-[#f5f5f5] px-[15px] text-[13px] outline-none placeholder:text-[#737373] focus:border-black/40" id="email" name="email" type="email" placeholder="Enter your email address" required />
      <label className="mt-[23px] mb-[7px] text-[14px] leading-[18px]" htmlFor="role">I am a:</label>
      <select className="h-[48px] appearance-none border border-black/5 bg-[#f5f5f5] bg-[linear-gradient(45deg,transparent_50%,#363636_50%),linear-gradient(135deg,#363636_50%,transparent_50%)] bg-[position:calc(100%-20px)_20px,calc(100%-15px)_20px] bg-[size:5px_5px,5px_5px] bg-no-repeat px-[15px] text-[13px] text-[#737373] outline-none focus:border-black/40" defaultValue="" id="role" name="role" required>
        <option value="" disabled>Select what best describes you</option>
        {ROLES.map((role) => <option key={role} value={role}>{role}</option>)}
      </select>
      <label className="mt-[23px] mb-[7px] text-[14px] leading-[18px]" htmlFor="about">Tell us about yourself and what you&rsquo;d like to work on</label>
      <textarea className="h-[114px] resize-y border border-black/5 bg-[#f5f5f5] px-[15px] py-[13px] text-[13px] outline-none placeholder:text-[#737373] focus:border-black/40" id="about" name="about" placeholder="Tell us about yourself and what you’d like to work on" />
      <label className="mt-[25px] flex cursor-pointer items-start gap-[8px] text-[12px] leading-[14px]">
        <input className="mt-px size-[15px] appearance-none border border-black/5 bg-[#f5f5f5] checked:border-black checked:bg-black" name="updates" type="checkbox" />
        <span>Keep me updated about Miller Larkin.</span>
      </label>
      <button className="mt-[28px] h-[48px] bg-black text-[16px] leading-none text-white transition-colors hover:bg-grey-14 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:cursor-wait disabled:opacity-70" disabled={status === "sending"} type="submit">{status === "sending" ? "Sending…" : "Apply"}</button>
      {message ? <p aria-live="polite" className={`mt-3 text-[13px] ${status === "error" ? "text-red-700" : "text-green-700"}`}>{message}</p> : null}
    </form>
  );
}
