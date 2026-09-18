import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const ContactForm = ({ buttonLabel }) => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const next = {};

    if (form.name.trim().length < 2) {
      next.name = "Please enter your name.";
    }

    if (!form.email.includes("@") || !form.email.includes(".")) {
      next.email = "Please enter a valid email address.";
    }

    if (form.message.trim().length < 10) {
      next.message = "Please tell us a bit more — at least 10 characters.";
    }

    return next;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const found = validate();
    setErrors(found);

    if (Object.keys(found).length !== 0) return;

    setSending(true);

    setTimeout(() => {
      setSending(false);
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    }, 1200);
  };

if (sent) {
  return (
    <div className="viewing__done">
      <FontAwesomeIcon icon={faCircleCheck} className="viewing__icon" />
      <h2 className="viewing__title">Thank you</h2>
      <p className="detail__text">
        Your message has been received. We will get back to you within one
        working day.
      </p>
    </div>
  );
}

  return (
    <form className="viewing" onSubmit={handleSubmit} noValidate>
      <div className="viewing__field">
        <label htmlFor="name" className="viewing__label">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="viewing__input"
        />
        {errors.name && <p className="viewing__error">{errors.name}</p>}
      </div>

      <div className="viewing__field">
        <label htmlFor="email" className="viewing__label">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="viewing__input"
        />
        {errors.email && <p className="viewing__error">{errors.email}</p>}
      </div>

      <div className="viewing__field">
        <label htmlFor="message" className="viewing__label">Message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          className="viewing__input"
        />
        {errors.message && <p className="viewing__error">{errors.message}</p>}
      </div>

      <button type="submit" className="btn viewing__submit" disabled={sending}>
        {sending ? <span className="spinner"></span> : buttonLabel}
      </button>
    </form>
  );
};

export default ContactForm;