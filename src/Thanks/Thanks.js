import style from "./Thanks.module.css";
import icon from "../Icons/illustration-thank-you.svg";
export const Thanks = (props) => {
  return (
    <div>
      <div className={style.box}>
        <img className={style.picture} src={icon} />
        <p className={style.prompt}>You selected {props.func2} out of 5</p>
        <h1 className={style.heading}>Thank you!</h1>
        <p className={style.text}>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </div>
  );
};
