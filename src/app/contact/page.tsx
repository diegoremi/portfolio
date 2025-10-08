"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    if (form.current) {
      emailjs
        .sendForm(
          "service_0glht8q",
          "template_mflm23d",
          form.current,
          "nDGDSX7aYDPQ-MMXv"
        )
        .then(
          () => {
            setStatus("Message sent!");
            form.current?.reset();
          },
          () => {
            setStatus("Failed to send message.");
          }
        );
    }
  };

  return (
    <main className="flex-1 px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Let's Connect
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            Have a project in mind or just want to say hi? Fill out the form
            below and I&apos;ll get back to you as soon as possible.
          </p>
        </div>
        <form ref={form} className="mt-16 sm:mt-20" onSubmit={sendEmail}>
          <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
            <div>
              <label className="form-label" htmlFor="name">
                Name
              </label>
              <div className="mt-2.5">
                <input
                  autoComplete="name"
                  className="form-input"
                  id="name"
                  name="user_name"
                  placeholder="Your Name"
                  type="text"
                />
              </div>
            </div>
            <div>
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <div className="mt-2.5">
                <input
                  autoComplete="email"
                  className="form-input"
                  id="email"
                  name="user_email"
                  placeholder="Your Email"
                  type="email"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label className="form-label" htmlFor="message">
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  className="form-input"
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              className="flex w-full items-center justify-center rounded-lg bg-[var(--primary-color)] px-3.5 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-opacity-80 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[var(--primary-color)] transition-all duration-300 ease-in-out transform hover:scale-105"
              type="submit"
            >
              Send Message
            </button>
          </div>
          {status && <p className="mt-4 text-center text-white">{status}</p>}
        </form>
      </div>
    </main>
  );
}
