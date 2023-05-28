import React, { useEffect, useState } from "react";
import style from "./Results.module.css";
import { Item } from "../Components/Item";
import data from "../../assets/data.json";

export const Results = () => {
  const [myData, setMyData] = useState(null);

  useEffect(() => {
    setMyData(data);
  }, []);

  return (
    <div className={style.wrapper}>
      <div className={style.resultsWrapper}>
        <div className={style.left}>
          <span className={style.heading}>Your Result</span>
          <div className={style.circle}>
            <p className={style.big}>76</p>
            <p className={style.small}>of 100</p>
          </div>
          <div className={style.bottom}>
            <h1 className={style.propmt}>Great!</h1>
            <p className={style.text}>
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </div>
        </div>
        <div className={style.right}>
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
    </div>
  );
};
