import React, { useState, useContext } from "react";
import sublinks from "./data";
const AppContext = React.createContext();

const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const AppProvider = ({ children }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function DisplayChanger(className, display, inputClassName) {
    document.querySelector(className).style.display = display;
  }
  function validateInputs() {
    const emailValue = email.trim();
    if (!emailValue.match(emailPattern)) {
      DisplayChanger(".error-message-email", "block");
      document.querySelector(".email-input").style.borderColor = "red";
    } else {
      DisplayChanger(".error-message-email", "none");
      document.querySelector(".email-input").style.borderColor =
        "hsl(246, 25%, 77%)";
    }
    if (firstName == "") {
      DisplayChanger(".error-message-name", "block", ".name-input");
      document.querySelector(".name-input").style.borderColor = "red";
    } else {
      DisplayChanger(".error-message-name", "none");
      document.querySelector(".name-input").style.borderColor =
        "hsl(246, 25%, 77%)";
    }
    if (lastName == "") {
      document.querySelector(".last-input").style.borderColor = "red";
      DisplayChanger(".error-message-last", "block");
    } else {
      DisplayChanger(".error-message-last", "none");
      document.querySelector(".last-input").style.borderColor =
        "hsl(246, 25%, 77%)";
    }
    if (password == "") {
      DisplayChanger(".error-message-password", "block");
      document.querySelector(".password-input").style.borderColor = "red";
    } else {
      DisplayChanger(".error-message-password", "none");
      document.querySelector(".password-input").style.borderColor =
        "hsl(246, 25%, 77%)";
    }
  }
  return (
    <AppContext.Provider
      value={{
        validateInputs,
        firstName,
        setFirstName,
        lastName,
        setLastName,
        email,
        setEmail,
        password,
        setPassword,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
