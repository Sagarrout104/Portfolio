import React, { useState } from "react";
import "./contact.css";

import facebookIcon from "../../assets/facebook.png";
import linkedinIcon from "../../assets/linkedin.png";
import githubIcon from "../../assets/github.png";
import instagramIcon from "../../assets/instagram.png";

const Contact = () => {
  const [show, setShow] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const [myName, email, msg] = [
      e.target.name.value,
      e.target.email.value,
      e.target.message.value,
    ];

    setShow({
      name: myName,
      success_msg: "Your message has been sent successfully!",
    });

    e.target.reset();
  };

  return (
    <section id="contact">
      <h2 className="contactPageTitle">Contact Me</h2>
      {show.name && (
        <p className="success-msg">
          {`Hello, ${show.name} ${show.success_msg}`}
        </p>
      )}
      <form className="contactForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="name"
          placeholder="Your Name"
          name="name"
          required
        />
        <input
          type="email"
          className="email"
          placeholder="Your Email"
          name="email"
          required
        />
        <textarea
          name="message"
          cols="30"
          rows="5"
          placeholder="Your Messsage...."
          className="msg"
          required
        ></textarea>

        <button type="submit" value="Send" className="submitBtn">
          Submit
        </button>
      </form>

      <div className="links">
        <a href="https://github.com/Sagarrout104">
          <img src={githubIcon} alt="Instagram" className="link" />
        </a>
        <a href="https://www.linkedin.com/in/sagar-rout-468986251">
          <img src={linkedinIcon} alt="Twitter" className="link" />
        </a>
        <a href="https://instagram.com/Sagarrout07 ">
          <img src={instagramIcon} alt="Instagram" className="link" />
        </a>
        <a href="https://facebook.com/sagar.rout.3344">
          <img src={facebookIcon} alt="Facebook" className="link" />
        </a>
      </div>
    </section>
  );
};

export default Contact;

/* NOTE: This is a dummy contact page; it is not connected to the backend
        API. It is only the frontend part. I will connect the backend as soon as
        possible. */
