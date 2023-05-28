import React, { useState, useEffect } from "react";
import style from "./ResultsMobile.module.css";
import { Item } from "../Components/Item";
import data from "../../assets/data.json";

export const ResultsMobile = () => {
  const [myData, setMyData] = useState(null);

  useEffect(() => {
    setMyData(data);
  }, []);

  return (
    <div className={style.wrapper}>
      <div className={style.topDiv}>
        <span className={style.heading}>Your Result</span>
        <div className={style.circle}>
          <p className={style.big}>76</p>
          <p className={style.small}>of 100</p>
        </div>
        <div className={style.bottom}>
          <h2 className={style.propmt}>Great</h2>
          <p className={style.text}>
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
      </div>
      <div className={style.bottomDiv}>
        <div className={style.summeryWrapper}>
          <div className={style.summeryText}>Summery</div>
          <div className={style.summeryResults}>
            {myData != null
              ? myData.map((item, index) => {
                  return <Item data={item} index={index} />;
                })
              : ""}
          </div>
          <div className={style.btn}>Continue</div>
        </div>
      </div>
    </div>
  );
};
