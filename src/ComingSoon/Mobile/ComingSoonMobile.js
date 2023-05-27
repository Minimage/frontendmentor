import styles from "./ComingSoonMobile.module.css";
import person from "../../icons/hero-desktop.jpg";
import background from "../../icons/bg-pattern-desktop.svg";
import logo from "../../icons/logo.svg";
import btn_bg from "../../icons/icon-arrow.svg";
import errorIcon from "../../icons/icon-error.svg";
import Lottie from "lottie-react";
import Success from "../../assests/success.json";
import { useState, useRef } from "react";

export const ComingSoonMobile = () => {
  const lottieRef = useRef();
  const [email, setEmail] = useState("");
  const [error_msg, setErrorMsg] = useState("");
  const [error_icon, setErrorIcon] = useState(false);
  const contains = ["@", "."];

  const value = contains.every((item) => email.includes(item));
  const [overlay, setOverlay] = useState(false);

  const stopAnimation = () => {
    lottieRef.current.stop();
  };

  const playAnimation = () => {
    lottieRef.current.play();
  };

  const handleClick = (event) => {
    event.preventDefault();

    if (value === false) {
      setErrorMsg("Please enter a valid email");
      setErrorIcon(true);
    } else {
      setErrorMsg("");
      setOverlay(true);
      setErrorIcon(false);
      playAnimation();
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={
          overlay === false ? `${styles.overlayHide}` : `${styles.overlayShow}`
        }
      >
        <Lottie
          loop="false"
          onComplete={() => {
            stopAnimation();
            setOverlay(false);
          }}
          lottieRef={lottieRef}
          animationData={Success}
        />
      </div>
      <div
        style={{ backgroundImage: `url(${background})` }}
        className={styles.left}
      >
        <div className={styles.wrapper}>
          <img className={styles.logo} src={logo} alt="Logo" />
          <div className={styles.bgContainer}>
            <img className={styles.person} src={person} alt="Hero Img" />
          </div>
          <div className={styles.bottomWrapper}>
            <h1 className={styles.heading}>
              <span className={styles.firstWord}>WE'RE </span> <br /> COMING{" "}
              <br /> SOON
            </h1>

            <p>
              {/* {word.includes(contains[0]) && word.includes(contains[1])
                ? "yes"
                : "no"} */}
            </p>
            <p className={styles.text}>
              Hello fellow shoppers! We're currently building our new fashion
              store. Add your email below to stay up-to-date with announcements
              and our launch deals.
            </p>

            <div className={styles.bottomWrapper}>
              <form
                className={
                  error_icon === false
                    ? `${styles.form}`
                    : `${styles.formError}`
                }
              >
                <input
                  className={styles.inputField}
                  type="email"
                  placeholder="Email Address"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />

                {
                  <img
                    className={
                      error_icon
                        ? `${styles.show} ${styles.errorBtn}`
                        : `${styles.hide}`
                    }
                    src={errorIcon}
                  />
                }
                <button
                  onClick={handleClick}
                  style={{
                    background: `url(${btn_bg})`,
                    backgroundImage:
                      "linear-gradient(135deg,hsl(0, 80%, 86%),hsl(0, 74%, 74%))",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "50%",
                  }}
                  className={styles.submit}
                >
                  {<img src={btn_bg} />}
                </button>
                {/* <div className={styles.break}></div> */}
              </form>
              <p className={styles.errorMsg}>{error_msg}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
