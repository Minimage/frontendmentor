import styles from "./ComingSoon.module.css";
import person from "../../icons/hero-desktop.jpg";
import background from "../../icons/bg-pattern-desktop.svg";
import logo from "../../icons/logo.svg";
import btn_bg from "../../icons/icon-arrow.svg";
import { useState, useRef, useEffect } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import Success from "../../assests/success.json";
import Example from "./Example";

export const ComingSoon = () => {
  // Validation check to see if the email string contains valid characters.
  // If email doesnt contain valid characters, then it will trigger an error
  const errorValues = ["@", "."];

  // Inistialize email
  const [email, setEmail] = useState("");

  // If an error is encountered, toggle will be set to true
  const [toggle, setToggle] = useState(false);

  // Determines whether to show or hide overlay
  const [overlay, setOverly] = useState(false);

  //stops animation after it has be completed
  const stopAnimation = () => {
    lottieRef.current.stop();
  };

  // Plays animation when button is clicked and conditions are met
  const playAnimation = () => {
    lottieRef.current.play();
  };

  // When button is pressed, this function will fire and check if the email is valid
  const handleClick = () => {
    const errorHandler = errorValues.every((item) => email.includes(item));
    if (errorHandler === true) {
      setOverly(true);
      playAnimation();
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

  const lottieRef = useRef();

  return (
    <div className={styles.container}>
      <div
        className={
          overlay === false ? `${styles.overlayHide}` : `${styles.overlayShow}`
        }
      >
        <Lottie
          lottieRef={lottieRef}
          loop={false}
          // action="visibility: [0.4, 0.9]"
          onComplete={() => {
            setOverly(false);
            stopAnimation();

            // lottieRef.current.play();
          }}
          style={{ position: "absolute", left: "42%", top: "29%" }}
          animationData={Success}
          // loop={false}
        />
      </div>
      <div
        style={{ backgroundImage: `url(${background})` }}
        className={styles.left}
      >
        <div className={styles.wrapper}>
          <img className={styles.logo} alt="Logo" src={logo} />
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
                {<img alt="Logo" src={btn_bg} />}
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
