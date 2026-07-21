import { useState } from "react";
import { useTranslation } from "react-i18next";
import { sendContactForm } from "../ts/contact";

interface FormProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface StatusProps {
  success: boolean;
  message: string;
}

const Contact = () => {
  const { t } = useTranslation();

  const [status, setStatus] = useState<StatusProps | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [form, setForm] = useState<FormProps>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setStatus(null);

    try {
      await sendContactForm(form);
      setStatus({ success: true, message: t("contact.success") });
      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setStatus({ success: false, message: t("contact.fail") });
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="padding-16 content text-light-grey" id="contact">
      <h2>{t("contact.title")}</h2>
      <hr style={{ width: "200px" }} className="opacity" />
      <div className="section">
        <p>
          <i className="fa fa-map-marker fa-fw text-white xlarge margin-right"></i>{" "}
          {t("contact.address")}
        </p>
        <p>
          <i className="fa fa-phone fa-fw text-white xlarge margin-right"></i>{" "}
          {t("contact.phone")}
        </p>
        <p>
          <i className="fa fa-envelope fa-fw text-white xlarge margin-right">
            {" "}
          </i>{" "}
          {t("contact.email")}
        </p>
      </div>

      <br />

      <p>{t("contact.sendMessage")}</p>
      <form onSubmit={handleSubmit}>
        <p>
          <input
            className="input padding-16"
            type="text"
            name="name"
            value={form.name}
            placeholder={t("contact.placeholder.name")}
            required
            onChange={handleChange}
          />
        </p>
        <p>
          <input
            className="input padding-16"
            type="email"
            name="email"
            value={form.email}
            placeholder={t("contact.placeholder.email")}
            required
            onChange={handleChange}
          />
        </p>
        <p>
          <input
            className="input padding-16"
            type="text"
            name="subject"
            value={form.subject}
            placeholder={t("contact.placeholder.subject")}
            required
            onChange={handleChange}
          />
        </p>
        <p>
          <textarea
            className="input padding-16"
            name="message"
            value={form.message}
            rows={5}
            placeholder={t("contact.placeholder.message")}
            required
            onChange={handleChange}
          />
        </p>
        <p>
          <button
            className="button light-grey padding-large"
            type="submit"
            disabled={loading}
          >
            <i className="fa fa-paper-plane"></i>
            {t("contact.sendButton")}
          </button>
        </p>
      </form>

      <p style={{ marginTop: "1em", color: "white" }}>
        {loading && (
          <>
            <i
              className="fa fa-refresh fa-spin"
              style={{ fontSize: "18px", marginRight: "8px" }}
            />
            Sending...
          </>
        )}
      </p>

      {/* Messages */}
      {status && (
        <p
          style={{
            marginTop: "1em",
            color: status.success ? "lightgreen" : "red",
          }}
        >
          {status.message}
        </p>
      )}
    </div>
  );
};

export default Contact;
