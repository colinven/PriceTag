import { useState } from "react";
import "./QuoteForm.scss";

const WASH_INTERVALS = [
  "Never / First time",
  "Less than 1 year ago",
  "1 - 2 years ago",
  "3 - 4 years ago",
  "5+ years ago",
  "Not sure",
];

export default function QuoteForm({ onSubmit }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    lastWash: "",
  });

  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    if (onSubmit) await onSubmit(form);
    setLoading(false);
  }

  return (
    <div className="quote-page">

      <div className="quote-form-wrapper">
        <div className="quote-form__header">
          <span className="quote-form__badge">
            <span className="quote-form__badge-dot" />
            Free Estimate
          </span>
          <h2 className="quote-form__title">Get Your Instant Quote</h2>
          <p className="quote-form__subtitle">
            Fill out the form below and we'll calculate a price range for your
            home in seconds. <strong>We will never share your information.</strong>
          </p>
        </div>

        <form className="quote-form" onSubmit={handleSubmit} noValidate>

          {/* Name row */}
          <div className="quote-form__row">
            <div className="quote-form__field">
              <label className="quote-form__label" htmlFor="firstName">First Name</label>
              <input
                className="quote-form__input"
                id="firstName"
                name="firstName"
                type="text"
                placeholder="John"
                value={form.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="quote-form__field">
              <label className="quote-form__label" htmlFor="lastName">Last Name</label>
              <input
                className="quote-form__input"
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Smith"
                value={form.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Contact row */}
          <div className="quote-form__row">
            <div className="quote-form__field">
              <label className="quote-form__label" htmlFor="phone">Phone Number</label>
              <input
                className="quote-form__input"
                id="phone"
                name="phone"
                type="tel"
                placeholder="(704) 555-0123"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="quote-form__field">
              <label className="quote-form__label" htmlFor="email">Email Address</label>
              <input
                className="quote-form__input"
                id="email"
                name="email"
                type="email"
                placeholder="john@email.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Divider */}
          <div className="quote-form__section-label">Property Address</div>

          {/* Street */}
          <div className="quote-form__field quote-form__field--full">
            <label className="quote-form__label" htmlFor="street">Street Address</label>
            <input
              className="quote-form__input"
              id="street"
              name="street"
              type="text"
              placeholder="412 Maple Drive"
              value={form.street}
              onChange={handleChange}
              required
            />
          </div>

          {/* City / State / Zip */}
          <div className="quote-form__row quote-form__row--thirds">
            <div className="quote-form__field">
              <label className="quote-form__label" htmlFor="city">City</label>
              <input
                className="quote-form__input"
                id="city"
                name="city"
                type="text"
                placeholder="Charlotte"
                value={form.city}
                onChange={handleChange}
                required
              />
            </div>
            <div className="quote-form__field">
              <label className="quote-form__label" htmlFor="state">State</label>
              <input
                className="quote-form__input"
                id="state"
                name="state"
                type="text"
                placeholder="NC"
                maxLength={2}
                value={form.state}
                onChange={handleChange}
                required
              />
            </div>
            <div className="quote-form__field">
              <label className="quote-form__label" htmlFor="zip">ZIP Code</label>
              <input
                className="quote-form__input"
                id="zip"
                name="zip"
                type="text"
                placeholder="28205"
                maxLength={5}
                value={form.zip}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Last wash dropdown */}
          <div className="quote-form__field quote-form__field--full">
            <label className="quote-form__label" htmlFor="lastWash">
              How long since your last house wash?
            </label>
            <div className="quote-form__select-wrapper">
              <select
                className="quote-form__select"
                id="lastWash"
                name="lastWash"
                value={form.lastWash}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select an option...</option>
                {WASH_INTERVALS.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
              <svg className="quote-form__select-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </div>
          </div>

          {/* Submit */}
          <button
            className={`quote-form__submit ${loading ? "quote-form__submit--loading" : ""}`}
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="quote-form__spinner" />
                Calculating your quote...
              </>
            ) : (
              <>
                Get My Free Quote
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </>
            )}
          </button>
          <p className="quote-form__subtitle">
            By submitting, you agree to allow &lt;company&gt; to contact you by phone and email to follow up on your quote request.
          </p>

        </form>
      </div>
    </div>
  );
}