"use client";

import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";

type FormValues = {
  fullName: string;
  email: string;
  subject: string;
  projectType: string;
  message: string;
};

type FieldErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  fullName: "",
  email: "",
  subject: "",
  projectType: "",
  message: "",
};

const fieldClassName =
  "h-12 w-full rounded-md border border-border bg-background px-3.5 text-sm text-navy placeholder:text-muted focus:border-focus focus:outline-none focus:ring-2 focus:ring-focus/20";

function validateForm(values: FormValues): FieldErrors {
  const errors: FieldErrors = {};

  if (!values.fullName.trim()) {
    errors.fullName = "Please enter your full name.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.subject.trim()) {
    errors.subject = "Please enter a subject.";
  }

  if (!values.message.trim()) {
    errors.message = "Please tell us a little about your project.";
  }

  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (!status) return;

    const timeout = window.setTimeout(() => setStatus(""), 7000);
    return () => window.clearTimeout(timeout);
  }, [status]);

  function updateField(field: keyof FormValues, value: string) {
    const nextValues = { ...values, [field]: value };
    setValues(nextValues);

    if (hasSubmitted) {
      setErrors(validateForm(nextValues));
    }

    setStatus("");
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateForm(values);
    setErrors(nextErrors);
    setHasSubmitted(true);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("");
      return;
    }

    setStatus(
      "Your message is ready. Email submission hasn’t been connected yet.",
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="mx-auto max-w-2xl rounded-xl border bg-white p-6 shadow-xl shadow-navy/5 sm:p-9"
    >
      <div className="space-y-5">
        <div>
          <label
            htmlFor="full-name"
            className="mb-1.5 block text-sm font-medium text-navy"
          >
            Full Name <span aria-hidden="true" className="text-steel-dark">*</span>
          </label>
          <input
            id="full-name"
            name="fullName"
            type="text"
            autoComplete="name"
            required
            value={values.fullName}
            onChange={(event) => updateField("fullName", event.target.value)}
            placeholder="John Doe"
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? "full-name-error" : undefined}
            className={fieldClassName}
          />
          {errors.fullName && (
            <p
              id="full-name-error"
              className="mt-1.5 text-sm text-red-700 dark:text-red-300"
            >
              {errors.fullName}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-sm font-medium text-navy"
          >
            Email Address{" "}
            <span aria-hidden="true" className="text-steel-dark">
              *
            </span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={values.email}
            onChange={(event) => updateField("email", event.target.value)}
            placeholder="you@example.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={fieldClassName}
          />
          {errors.email && (
            <p
              id="email-error"
              className="mt-1.5 text-sm text-red-700 dark:text-red-300"
            >
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="subject"
            className="mb-1.5 block text-sm font-medium text-navy"
          >
            Subject{" "}
            <span aria-hidden="true" className="text-steel-dark">
              *
            </span>
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            required
            value={values.subject}
            onChange={(event) => updateField("subject", event.target.value)}
            placeholder="Your project..."
            aria-invalid={Boolean(errors.subject)}
            aria-describedby={errors.subject ? "subject-error" : undefined}
            className={fieldClassName}
          />
          {errors.subject && (
            <p
              id="subject-error"
              className="mt-1.5 text-sm text-red-700 dark:text-red-300"
            >
              {errors.subject}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="project-type"
            className="mb-1.5 block text-sm font-medium text-navy"
          >
            Project Type
          </label>
          <select
            id="project-type"
            name="projectType"
            value={values.projectType}
            onChange={(event) => updateField("projectType", event.target.value)}
            className={`${fieldClassName} cursor-pointer`}
          >
            <option value="">Select project type...</option>
            <option value="hardware-pcb">Hardware &amp; PCB Development</option>
            <option value="iot-embedded">IoT &amp; Embedded Systems</option>
            <option value="ai-vision">AI &amp; Computer Vision</option>
            <option value="web-development">Web Development</option>
            <option value="mobile-app">Mobile App Development</option>
            <option value="game-development">Game Development</option>
            <option value="other">Other</option>
            <option value="other">None</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-1.5 block text-sm font-medium text-navy"
          >
            Message{" "}
            <span aria-hidden="true" className="text-steel-dark">
              *
            </span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={values.message}
            onChange={(event) => updateField("message", event.target.value)}
            placeholder="Tell me about your project..."
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={`${fieldClassName} h-auto min-h-36 resize-y py-3`}
          />
          {errors.message && (
            <p
              id="message-error"
              className="mt-1.5 text-sm text-red-700 dark:text-red-300"
            >
              {errors.message}
            </p>
          )}
        </div>
      </div>

      <Button
        type="submit"
        className="mt-7 min-h-12 active:scale-[0.99]"
      >
        Send Message
      </Button>

      {status && (
        <p
          role="status"
          className="mt-4 rounded-md border border-border bg-background px-4 py-3 text-sm text-navy"
        >
          {status}
        </p>
      )}
    </form>
  );
}
