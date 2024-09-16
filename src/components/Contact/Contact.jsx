import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_q5ig25o", "template_a10ahgt", form.current, {
        publicKey: "fdf-pRhFxTEev6z0d",
      })
      .then(
        () => {
          alert("Email sent successfully!");
          form.current.reset(); // Reset the form after sending
        },
        (error) => {
          alert("Failed to send email. Please try again.");
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="body">
      <h1 className="header">
        Contact <span className="span">Me</span>{" "}
      </h1>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="from_name" />
        <label>Email</label>
        <input type="email" name="from_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
      <button className="btnsa">
        <a href="mailto:arunkumargobi12@gmail.com" className="email">
          {" "}
          Get My Mail Id
        </a>
      </button>
    </div>
  );
};
