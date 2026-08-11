import { FormEvent, useEffect, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaCommentDots,
} from "react-icons/fa";
import "./styles/Contact.css";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_xxx";
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_xxx";
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "public_xxx";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState("idle");
  const [toast, setToast] = useState<{ type: "success" | "error"; message: string } | null>(null);

  useEffect(() => {
    emailjs.init(PUBLIC_KEY);
  }, []);

  const showToast = (type: "success" | "error", message: string) => {
    setToast({ type, message });
    window.setTimeout(() => setToast(null), 3000);
  };

  const handleCopy = async (value: string, label: string) => {
    try {
      await navigator.clipboard.writeText(value);
      showToast("success", `${label} Copied`);
    } catch {
      showToast("error", `Unable to copy ${label}`);
    }
  };

  const validate = () => {
    const currentErrors: Record<string, string> = {};
    if (!formData.name.trim()) currentErrors.name = "Name is required.";
    if (!formData.email.trim()) currentErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) currentErrors.email = "Enter a valid email.";
    if (!formData.subject.trim()) currentErrors.subject = "Subject is required.";
    if (!formData.message.trim()) currentErrors.message = "Message is required.";
    setErrors(currentErrors);
    return Object.keys(currentErrors).length === 0;
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!validate()) return;
    setStatus("loading");

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      showToast("success", "Thank you for contacting me. I will get back to you soon.");
    } catch {
      setStatus("error");
      showToast("error", "Message failed. Please try again later.");
    }
  };

  const socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com/tpufiq-max",
      icon: <FaGithub />,
      description: "Open source portfolio",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/mohammed-toufiq-maniyar-685877295",
      icon: <FaLinkedin />,
      description: "Professional network",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/txufiqqq_18/?hl=en",
      icon: <FaInstagram />,
      description: "Creative updates",
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/@mohammedtoufiqmaniyar7768",
      icon: <FaYoutube />,
      description: "Tech video channel",
    },
  ];

  return (
    <section className="contact-section section-container" id="contact">
      <div className="contact-header">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Let's build your next product together.</h2>
          <p className="subtitle">
            Premium outreach designed to impress recruiters with a polished dark glass experience.
          </p>
        </div>
        <div className="status-chip-group">
          <span className="status-chip active">🟢 Available for Internship</span>
          <span className="status-chip active">🟢 Open to Opportunities</span>
        </div>
      </div>

      <div className="contact-grid">
        <motion.div
          className="contact-card profile-card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div className="profile-top">
            <div>
              <p className="profile-role">Mohammad Toufiq Maniyar</p>
              <h3>Full Stack Developer</h3>
              <p className="profile-subtitle">Java & Spring Boot Developer | AI Application Developer</p>
            </div>
            <div className="profile-badge">Premium</div>
          </div>

          <div className="profile-meta">
            <div className="meta-item">
              <FaMapMarkerAlt />
              <a
                href="https://www.google.com/maps/place/Davangere,+Karnataka,+India"
                target="_blank"
                rel="noreferrer"
              >
                Davangere, Karnataka, India
              </a>
            </div>
            <div className="meta-item">
              <FaEnvelope />
              <a href="mailto:toufiqmaniyar484@gmail.com">toufiqmaniyar484@gmail.com</a>
            </div>
            <div className="meta-item">
              <FaPhoneAlt />
              <a href="tel:+916362980550">+91 6362980550</a>
            </div>
          </div>

          <div className="profile-actions">
            <button type="button" aria-label="Copy email address" onClick={() => handleCopy("toufiqmaniyar484@gmail.com", "Email")}>📧 Copy Email</button>
            <button type="button" aria-label="Copy phone number" onClick={() => handleCopy("+91 6362980550", "Phone Number")}>📱 Copy Phone Number</button>
          </div>

          <div className="social-card-grid">
            {socialLinks.map((card) => (
              <motion.a
                key={card.label}
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-card"
                aria-label={`Open ${card.label}`}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.25 }}
              >
                <span className="social-icon">{card.icon}</span>
                <div>
                  <p>{card.label}</p>
                  <small>{card.description}</small>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.form
          className="contact-card form-card"
          onSubmit={handleSubmit}
          noValidate
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
        >
          <div className="form-title">
            <FaCommentDots />
            <div>
              <h3>Send a message</h3>
              <p>Share your idea, role, or internship opportunity.</p>
            </div>
          </div>

          <div className="form-grid">
            {[
              { label: "Name", name: "name", type: "text", value: formData.name },
              { label: "Email", name: "email", type: "email", value: formData.email },
              { label: "Subject", name: "subject", type: "text", value: formData.subject },
            ].map((field) => (
              <div key={field.name} className="form-group">
                <input
                  type={field.type}
                  id={field.name}
                  value={field.value}
                  placeholder=" "
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  className={errors[field.name] ? "invalid" : ""}
                  aria-invalid={!!errors[field.name]}
                  aria-describedby={errors[field.name] ? `${field.name}-error` : undefined}
                  required
                />
                <label htmlFor={field.name}>{field.label}</label>
                {errors[field.name] && (
                  <span id={`${field.name}-error`} className="field-error">
                    {errors[field.name]}
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="form-group textarea-group">
            <textarea
              id="message"
              value={formData.message}
              placeholder=" "
              onChange={(e) => handleChange("message", e.target.value)}
              className={errors.message ? "invalid" : ""}
              rows={6}
              required
            />
            <label htmlFor="message">Message</label>
            {errors.message && <span className="field-error">{errors.message}</span>}
          </div>

          <div className="form-footer">
            <button type="submit" className="submit-btn" disabled={status === "loading"}>
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
            {status === "success" && (
              <p className="submit-success">Thank you for contacting me. I will get back to you soon.</p>
            )}
            {status === "error" && (
              <p className="submit-error">Submission failed. Please try again later.</p>
            )}
          </div>

        </motion.form>
      </div>

      {toast && (
        <div
          className={`toast ${toast.type === "success" ? "toast-success" : "toast-error"}`}
          role="status"
          aria-live="polite"
        >
          <FaCheckCircle />
          <span>{toast.message}</span>
        </div>
      )}
    </section>
  );
};

export default Contact;
