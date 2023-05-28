import React from "react";
import style from "./Item.module.css";

export const Item = (props) => {
  const { data, index } = props;

  const text = {
    0: "hsl(0, 100%, 67%)",
    1: "hsl(39, 100%, 56%)",
    2: "hsl(166, 100%, 37%)",
    3: "hsl(234, 85%, 45%)",
  };

  const bgColor = {
    0: "hsla(0, 100%, 67%,0.1)",
    1: "hsla(39, 100%, 56%,0.1)",
    2: "hsla(166, 100%, 37%,0.1)",
    3: "hsla(234, 85%, 45%,0.1)",
  };
  return (
    <div style={{ backgroundColor: bgColor[index] }} className={style.item}>
      <div className={style.icon}>
        <img src={data.icon} />
      </div>
      <div style={{ color: text[index] }} className={style.category}>
        {data.category}
      </div>
      <div className={style.score}>
        {" "}
        {data.score} <span className={style.percent}> / 100</span>
      </div>
    </div>
  );
};
