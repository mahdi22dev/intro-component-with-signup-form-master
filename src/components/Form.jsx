import React, { useState } from "react";
import { useGlobalContext } from "../context";

const Form = () => {
  const {
    validateInputs,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    password,
    setPassword,
  } = useGlobalContext();
  // Validate email

  function handleSubmit(event) {
    // submit data to server or validate input
    event.preventDefault();
    validateInputs();
    setFirstName("");
    setLastName("");
    setPassword("");
  }
  return (
    <section className="form">
      <div className="trial-offer">
        Try it free 7 days <span>then $20/mo. thereafter</span>
      </div>
      <form onSubmit={handleSubmit} noValidate>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          className="name-input inputs"
        />
        <p className="error-message-name default-input">
          First Name cannot be empty
        </p>

        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
          className="last-input inputs"
        />
        <p className="error-message-last default-input">
          Last Name cannot be empty
        </p>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="email-input inputs"
        />
        <p className="error-message-email default-input">
          looks like this is not an email
        </p>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="password-input inputs"
        />
        <p className="error-message-password default-input">
          Password Name cannot be empty
        </p>
        <button type="submit" className="btn">
          Claim Your Free Trial
        </button>
        <p className="terms-and-services">
          {" "}
          By clicking the button, you are agreeing to our{" "}
          <a href="">Terms and Services</a>
        </p>
      </form>
    </section>
  );
};

export default Form;
