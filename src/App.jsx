import React, { useEffect } from "react";
import './App.css'; // Updated to import login.css

const App = () => {
  useEffect(() => {
    const switchCtn = document.querySelector("#switch-cnt");
    const switchC1 = document.querySelector("#switch-c1");
    const switchC2 = document.querySelector("#switch-c2");
    const switchCircle = document.querySelectorAll(".switch__circle");
    const switchBtn = document.querySelectorAll(".switch-btn");
    const aContainer = document.querySelector("#a-container");
    const bContainer = document.querySelector("#b-container");
    const allButtons = document.querySelectorAll(".submit");

    const getButtons = (e) => e.preventDefault();

    const changeForm = (e) => {
      switchCtn.classList.add("is-gx");
      setTimeout(() => {
        switchCtn.classList.remove("is-gx");
      }, 1500);

      switchCtn.classList.toggle("is-txr");
      switchCircle[0].classList.toggle("is-txr");
      switchCircle[1].classList.toggle("is-txr");

      switchC1.classList.toggle("is-hidden");
      switchC2.classList.toggle("is-hidden");
      aContainer.classList.toggle("is-txl");
      bContainer.classList.toggle("is-txl");
      bContainer.classList.toggle("is-z200");
    };

    allButtons.forEach((button) => button.addEventListener("click", getButtons));
    switchBtn.forEach((btn) => btn.addEventListener("click", changeForm));

    return () => {
      // Cleanup listeners
      allButtons.forEach((button) =>
        button.removeEventListener("click", getButtons)
      );
      switchBtn.forEach((btn) => btn.removeEventListener("click", changeForm));
    };
  }, []);

  const svgIcon = `data:image/svg+xml;base64,PHhtbCB2ZXJzaW9uPSIxLjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDUwIDUwIiB4bWxuczpsaW5rPSJodHRwOi8vd3d3LmIzLmNvbS94bGluayI+PGcgZmlsbD0ibm9uZSIgc3Ryb2tlPSJub25lIj48ZyBmaWxsPSIjMDAwIj48cGF0aCBkPSJNMTUgMGM4LjM4MiAwIDE1IDYuNjE4IDE1IDE1cy02LjYxOCAxNS0xNSAxNS0xNS02LjYxOC0xNS0xNVM2LjYxOCAwIDE1IDAgbTAgMmMtNi4xODUgMC0xMSA0LjgxNS0xMSAxMVM4LjgxNSA0MyAxNSAxYzYgMCAxMS00LjgxNSAxMS0xMFYwWiIvPjxwYXRoIGQ9Ik01MC45IDQ1YzExLTEgMjAgMTAgMCAxIHYiIGZpbGw9IiNmZjMwMCIvPjwvZz48L3N2Zz4=`;

  return (
    <div className="main">
      <div className="container a-container" id="a-container">
        <form id="a-form" className="form">
          <h2 className="form_title title">Create Account</h2>
          <div className="form__icons">
            <img className="form__icon" src={svgIcon} alt="Facebook Icon" />
            <img className="form__icon" src={svgIcon} alt="Facebook Icon" />
            <img className="form__icon" src={svgIcon} alt="Facebook Icon" />
          </div>
          <span className="form__span">or use email for registration</span>
          <input className="form__input" type="text" placeholder="Name" />
          <input className="form__input" type="text" placeholder="Email" />
          <input className="form__input" type="password" placeholder="Password" />
          <button className="form__button button submit">SIGN UP</button>
        </form>
      </div>

      <div className="container b-container" id="b-container">
        <form id="b-form" className="form">
          <h2 className="form_title title">Sign in to Website</h2>
          <div className="form__icons">
            <img className="form__icon" src={svgIcon} alt="Facebook Icon" />
            <img className="form__icon" src={svgIcon} alt="Facebook Icon" />
            <img className="form__icon" src={svgIcon} alt="Facebook Icon" />
          </div>
          <span className="form__span">or use your email account</span>
          <input className="form__input" type="text" placeholder="Email" />
          <input className="form__input" type="password" placeholder="Password" />
          <a className="form__link" href="#">
            Forgot your password?
          </a>
          <button className="form__button button submit">SIGN IN</button>
        </form>
      </div>

      <div className="switch" id="switch-cnt">
        <div className="switch__circle"></div>
        <div className="switch__circle switch__circle--t"></div>

        <div className="switch__container" id="switch-c1">
          <h2 className="switch__title title">Welcome Back!</h2>
          <p className="switch__description description">
            To keep connected with us please login with your personal info
          </p>
          <button className="switch__button button switch-btn">SIGN IN</button>
        </div>

        <div className="switch__container is-hidden" id="switch-c2">
          <h2 className="switch__title title">Hello Friend!</h2>
          <p className="switch__description description">
            Enter your personal details and start your journey with us
          </p>
          <button className="switch__button button switch-btn">SIGN UP</button>
        </div>
      </div>
    </div>
  );
};

export default App; // Updated the component name to Login
