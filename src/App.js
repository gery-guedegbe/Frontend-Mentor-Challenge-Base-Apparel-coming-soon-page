import React, { useState } from "react";
import heroDesktop from "./assets/images/hero-desktop.jpg";
import logo from "./assets/images/logo.svg";
import iconErreur from "./assets/images/icon-error.svg";
import iconArrow from "./assets/images/icon-arrow.svg";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);

    // Mettez à jour l'état de la validité de l'e-mail
    setIsEmailValid(isValid);
  };

  return (
    <div className="card">
      <div className="logo">
        <img src={logo} alt=""></img>
      </div>
      <div className="card-container">
        <div className="left">
          <div>
            <div className="text">
              <h1 className="title">
                <span>WE'RE</span> <br></br> COMING
                <br></br> SOON
              </h1>
              <p className="description">
                Hello fellow shoppers! We're currently building our new fashion
                store. Add your email below to stay up-to-date with
                announcements and our launch deals.
              </p>
            </div>
            <form id="emailForm">
              <div className="input-block">
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={isEmailValid ? "" : "error-input"}
                ></input>
                <button type="button" onClick={validateEmail}>
                  <img src={iconArrow} alt="erreur icone"></img>
                </button>
              </div>
              {!isEmailValid && (
                <img
                  src={iconErreur}
                  className="icon-erreur"
                  alt="Erreur"
                  style={{ marginLeft: "10px", height: "20px" }}
                />
              )}
              {!isEmailValid && (
                <div className="error-message">
                  Please provide a valid email
                </div>
              )}
            </form>
          </div>
        </div>
        <div className="right">
          <img src={heroDesktop} alt="" />
        </div>
      </div>
      <footer>
        <p className="attribution">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noopener noreferrer"
          >
            Frontend Mentor
          </a>{" "}
          Coded by <a href="0">Géry GUEDEGBE</a>.
        </p>
      </footer>
    </div>
  );
}

export default App;
