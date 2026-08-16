import { useState } from "react";
import { SCHOOL } from "../data/site";
import Button from "./Button";
import "./ContactForm.css";

// Set to "email" or "whatsapp" to choose how inquiries are sent.
// No backend/database is used — this only builds a pre-filled
// mailto: link or a WhatsApp chat link from the form contents.
const SUBMIT_METHOD = "email";

const GRADES = [
  "Montessori",
  "Grade 1",
  "Grade 2",
  "Grade 3",
  "Grade 4",
  "Grade 5",
  "Grade 6",
  "Grade 7",
  "Grade 8",
  "Grade 9",
  "Grade 10",
];

const initialForm = {
  parentName: "",
  studentName: "",
  phone: "",
  email: "",
  grade: "",
  message: "",
};

function validate(form) {
  const errors = {};
  if (!form.parentName.trim()) errors.parentName = "Parent/guardian name is required.";
  if (!form.studentName.trim()) errors.studentName = "Student name is required.";
  if (!form.phone.trim()) {
    errors.phone = "Phone number is required.";
  } else if (!/^[0-9+\-\s()]{7,}$/.test(form.phone.trim())) {
    errors.phone = "Enter a valid phone number.";
  }
  if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (!form.grade) errors.grade = "Please select a grade.";
  return errors;
}

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const foundErrors = validate(form);
    setErrors(foundErrors);
    if (Object.keys(foundErrors).length > 0) return;

    const summary = `New Admission Inquiry
Parent/Guardian: ${form.parentName}
Student: ${form.studentName}
Phone: ${form.phone}
Email: ${form.email || "N/A"}
Grade Applying For: ${form.grade}
Message: ${form.message || "N/A"}`;

    if (SUBMIT_METHOD === "whatsapp") {
      const url = `https://wa.me/${SCHOOL.whatsapp}?text=${encodeURIComponent(summary)}`;
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      const subject = encodeURIComponent(`Admission Inquiry - ${form.studentName}`);
      const body = encodeURIComponent(summary);
      window.location.href = `mailto:${SCHOOL.email}?subject=${subject}&body=${body}`;
    }

    setSubmitted(true);
    setForm(initialForm);
  };

  if (submitted) {
    return (
      <div className="contact-form contact-form--success">
        <div className="contact-form__success-icon">✓</div>
        <h3>Thank you!</h3>
        <p>
          Your inquiry has been prepared{" "}
          {SUBMIT_METHOD === "whatsapp" ? "in WhatsApp" : "in your email app"}. If it
          didn't open automatically, please contact us directly at{" "}
          <a href={`mailto:${SCHOOL.email}`}>{SCHOOL.email}</a>.
        </p>
        <Button variant="ghost" onClick={() => setSubmitted(false)}>
          Send another inquiry
        </Button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form__row">
        <Field
          label="Parent/Guardian Name"
          name="parentName"
          value={form.parentName}
          onChange={handleChange}
          error={errors.parentName}
          required
        />
        <Field
          label="Student Name"
          name="studentName"
          value={form.studentName}
          onChange={handleChange}
          error={errors.studentName}
          required
        />
      </div>
      <div className="contact-form__row">
        <Field
          label="Phone Number"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          error={errors.phone}
          required
        />
        <Field
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          error={errors.email}
        />
      </div>

      <div className="contact-form__field">
        <label htmlFor="grade">
          Grade Applying For <span aria-hidden="true">*</span>
        </label>
        <select id="grade" name="grade" value={form.grade} onChange={handleChange} aria-invalid={!!errors.grade}>
          <option value="">Select a grade</option>
          {GRADES.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
        {errors.grade && <span className="contact-form__error">{errors.grade}</span>}
      </div>

      <div className="contact-form__field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us anything that will help us assist you..."
        />
      </div>

      <Button type="submit" variant="primary" className="btn--full-mobile">
        Submit Inquiry
      </Button>
    </form>
  );
}

function Field({ label, name, value, onChange, error, type = "text", required }) {
  return (
    <div className="contact-form__field">
      <label htmlFor={name}>
        {label} {required && <span aria-hidden="true">*</span>}
      </label>
      <input id={name} name={name} type={type} value={value} onChange={onChange} aria-invalid={!!error} />
      {error && <span className="contact-form__error">{error}</span>}
    </div>
  );
}
