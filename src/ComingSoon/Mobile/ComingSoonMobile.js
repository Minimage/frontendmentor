import styles from "./ComingSoonMobile.module.css";
import person from "../../icons/hero-desktop.jpg";
import background from "../../icons/bg-pattern-desktop.svg";
import logo from "../../icons/logo.svg";
import btn_bg from "../../icons/icon-arrow.svg";

export const ComingSoonMobile = () => {
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
            <input
              className={styles.inputField}
              type="email"
              placeholder="Email Address"
            />

            <button
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
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <img className={styles.person} src={person} alt="person" />
      </div>
    </div>
  );
};
