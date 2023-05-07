import { useState } from "react";
import star from "../Icons/icon-star.svg";
import style from "./Rating.module.css";
export const Rating = (props) => {
  const buttons = [1, 2, 3, 4, 5];
  const [rate, setRate] = useState();
  return (
    <div className={style.container}>
      <div className={style.box}>
        <img src={star} alt="star" />
        <h1 className={style.heading}>How did we do?</h1>
        <p className={style.text}>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>

        <div className={style.btnWrapper}>
          {buttons.map((item, index) => {
            return (
              <button
                onClick={() => {
                  setRate(item);
                  props.func1(item);
                }}
                className={
                  rate === item
                    ? `${style.btn} ${style.btnActivated}`
                    : style.btn
                }
                key={index}
              >
                {item}
              </button>
            );
          })}
        </div>

        <button
          disabled={!rate}
          onClick={() => {
            props.sub(true);
          }}
          className={style.submit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};
