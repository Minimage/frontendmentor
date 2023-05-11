import styles from "./ComingSoon.module.css";
import person from "../../icons/hero-desktop.jpg";
import background from "../../icons/bg-pattern-desktop.svg";
import logo from "../../icons/logo.svg";
import btn_bg from "../../icons/icon-arrow.svg";
import { useState } from "react";

export const ComingSoon = () => {
  // Validation check to see if the email string contains valid characters.
  // If email doesnt contain valid characters, then it will trigger an error
  const errorValues = ["@", "."];

  // Inistialize email
  const [email, setEmail] = useState("");

  // If an error is encountered, toggle will be set to true
  const [toggle, setToggle] = useState(false);

  // When button is pressed, this function will fire and check if the email is valid
  const handleClick = () => {
    const errorHandler = errorValues.every((item) => email.includes(item));

    if (errorHandler == true) {
      setToggle(false);
    } else setToggle(true);
    console.log(toggle);
  };

  // On every key down, this function is called but will not fire until enter is pressed
  const something = (event) => {
    if (event.keyCode === 13) {
      handleClick(); // If enter key is pressed, calls handleClick function
    }
  };

  return (
    <div className={styles.container}>
      <div
        style={{ backgroundImage: `url(${background})` }}
        className={styles.left}
      >
        <div className={styles.wrapper}>
          <img className={styles.logo} src={logo} />
          <h1 className={styles.heading}>
            <span className={styles.firstWord}>WE'RE </span> <br /> COMING{" "}
            <br /> SOON
          </h1>

          <p className={styles.text}>
            Hello fellow shoppers! We're currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>

          <div className={styles.input}>
            <div className={styles.inputWrapper}>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className={
                  toggle ? `${styles.inputFieldError}` : `${styles.inputField}`
                }
                type="email"
                placeholder="Email Address"
                onKeyDown={(e) => something(e)}
              />

              <button
                type="submit"
                onClick={handleClick}
                style={{
                  background: `url(${btn_bg})`,
                  backgroundImage:
                    "linear-gradient(135deg,hsl(0, 80%, 86%),hsl(0, 74%, 74%))",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "50%",
                }}
                className={
                  toggle ? `${styles.submitError}` : `${styles.submit}`
                }
              >
                {<img src={btn_bg} />}
              </button>
            </div>

            <div className={styles.errorHolder}>
              <p className={toggle ? `${styles.show}` : `${styles.hide}`}>
                Please provide a valid email
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <img className={styles.person} src={person} alt="person" />
      </div>
    </div>
  );
};
