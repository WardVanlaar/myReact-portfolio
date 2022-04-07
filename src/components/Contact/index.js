import React, { useState } from "react";
import { FaGithubAlt, FaLinkedinIn, FaSlack, FaMobileAlt } from "react-icons/fa";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { validateEmail } from "../../utils/helpers";

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log("Form", formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
  };

  return (
    <section className="container" id="contact-me">
      <div className="item">
        <h1>Contact me</h1>
      </div>
      <div className="item">
        <form id="contact-form" onSubmit={handleSubmit}>
          <div>
            <label className="contact-label" htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              defaultValue={name}
              onBlur={handleChange}
            />
          </div>
          <div>
            <label className="contact-label" htmlFor="email">Email address:</label>
            <input
              type="email"
              name="email"
              defaultValue={email}
              onBlur={handleChange}
            />
          </div>
          <div>
            <label className="contact-label" htmlFor="message">Message:</label>
            <textarea
              name="message"
              rows="5"
              defaultValue={message}
              onBlur={handleChange}
            />
          </div>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <button data-testid="button" type="submit">
            Submit
          </button>
        </form>
      </div>
      <div className="container2">
          
             <a href="https://github.com/WardVanlaar">
            <FaGithubAlt size='40' />
          </a>
          <a href="https://www.linkedin.com/in/ward-vanlaar-98b50b214/">
            <FaLinkedinIn size='40' />
          </a>
          
          <a href="https://www.linkedin.com/in/ward-vanlaar-98b50b214/">
            <BsFillEnvelopeFill size='40'/>
          </a>

          <a href="https://wardvanlaar.slack.com/">
            <FaSlack size='40'/>
          </a>
          
          <a href="+1-613-240-4204">
            <FaMobileAlt size='40'/>
          </a>
      </div>
    </section>
  );
}

export default ContactForm;
