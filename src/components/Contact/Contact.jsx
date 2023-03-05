import React from "react";
import "./Contact.scss";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

export const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="container-small">
        <h2>Contact me</h2>

        <div className="social-links">
          <div>
            <a href="https://github.com/Gurkirat-s">
              <FaGithub />
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/gurkirats8">
              <FaLinkedinIn />
            </a>
          </div>
          <div>
            <a href="mailto:gurkiratsingh@hotmail.ca">
              <AiOutlineMail />
            </a>
          </div>
        </div>

        <h3>You can also send me a message.</h3>
        <form
          action="https://public.herotofu.com/v1/3ed6c690-b918-11ed-aecb-e7ff0a88dd7c"
          method="post"
          acceptCharset="UTF-8"
        >
          <div>
            <input
              className="name"
              name="Name"
              id="name"
              type="text"
              placeholder="Name"
              required
            />

            <input
              className="email"
              name="Email"
              id="email"
              type="email"
              placeholder="Email"
              required
            />

            <textarea
              className="message"
              id="message"
              name="message"
              placeholder="Your message"
              required
            />
            <input className="btn-submit" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
