"use client";

import { useState, type FormEvent } from "react";
import FloatingInput from "./FloatingInput";
import MagneticButton from "./MagneticButton";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject helps us route your message faster";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Tell us how we can help";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Please write at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error on edit
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-16 animate-fade-in-up">
        {/* Success checkmark */}
        <div className="w-20 h-20 rounded-full border-2 border-accent flex items-center justify-center mb-6 animate-scale-in">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-text-primary mb-3">
          Message Sent
        </h3>
        <p className="text-text-secondary font-[family-name:var(--font-body)] text-center max-w-sm mb-8">
          We&apos;ll get back to you within 24 hours. Meanwhile, feel free to reach us on WhatsApp for instant responses.
        </p>
        <MagneticButton
          href="https://wa.me/91XXXXXXXXXX"
          variant="outlined"
          size="sm"
        >
          Chat on WhatsApp →
        </MagneticButton>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <FloatingInput
          label="First Name"
          error={errors.firstName}
          inputProps={{
            type: "text",
            value: formData.firstName,
            onChange: (e) => handleChange("firstName", e.target.value),
            autoComplete: "given-name",
            required: true,
            spellCheck: false,
          }}
        />
        <FloatingInput
          label="Last Name"
          error={errors.lastName}
          inputProps={{
            type: "text",
            value: formData.lastName,
            onChange: (e) => handleChange("lastName", e.target.value),
            autoComplete: "family-name",
            required: true,
            spellCheck: false,
          }}
        />
      </div>

      <FloatingInput
        label="Email Address"
        error={errors.email}
        inputProps={{
          type: "email",
          value: formData.email,
          onChange: (e) => handleChange("email", e.target.value),
          autoComplete: "email",
          required: true,
          spellCheck: false,
        }}
      />

      <FloatingInput
        label="Subject"
        error={errors.subject}
        inputProps={{
          type: "text",
          value: formData.subject,
          onChange: (e) => handleChange("subject", e.target.value),
        }}
      />

      <FloatingInput
        label="Your Message"
        error={errors.message}
        isTextarea
        rows={4}
        inputProps={{
          value: formData.message,
          onChange: (e) => handleChange("message", e.target.value),
          required: true,
        }}
      />

      <div className="pt-4">
        <MagneticButton
          type="submit"
          variant="filled"
          size="lg"
          loading={isSubmitting}
          disabled={isSubmitting}
        >
          Send Message
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </MagneticButton>
      </div>
    </form>
  );
}
