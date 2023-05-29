import React, { useState, useEffect } from "react";
import style from "./ResultsMobile.module.css";
import { Item } from "../Components/Item";
import data from "../../assets/data.json";

export const ResultsMobile = () => {
  const [myData, setMyData] = useState(null);
  const [result, setResult] = useState(null);
  const [resp, setResp] = useState(null);
  const [value, setValue] = useState(null);

  useEffect(() => {
    setMyData(data);
  }, []);

  const generateRandomScore = () => {
    const newData = myData.map((item) => {
      return { ...item, score: Math.floor(Math.random() * 100) };
    });
    setMyData(newData);
  };

  useEffect(() => {
    if (myData != null && myData) {
      setResult(
        Math.round(
          (myData[0].score +
            myData[1].score +
            myData[2].score +
            myData[3].score) /
            4
        )
      );
    }
  }, [myData]);

  useEffect(() => {
    if (result == null || result.length == 0 || result == undefined) {
      setResp("");
    }

    if (result <= 10) {
      setResp("Poor");
    }
    if (result > 10 && result <= 30) {
      setResp("Okay");
    }
    if (result > 30 && result <= 50) {
      setResp("Average");
    }
    if (result > 50 && result <= 70) {
      setResp("Impressive");
    }
    if (result > 70 && result <= 90) {
      setResp("Great");
    }

    if (result > 90 && result <= 100) {
      setResp("Outstanding");
    }

    const percentage = result / 117;
    setValue((percentage * 100).toFixed(0));
  }, [result]);

  const handleClick = () => {
    generateRandomScore();
  };

  return (
    <div className={style.wrapper}>
      <div className={style.topDiv}>
        <span className={style.heading}>Your Result</span>
        <div className={style.circle}>
          <p className={style.big}>{result}</p>
          <p className={style.small}>of 100</p>
        </div>
        <div className={style.bottom}>
          <h2 className={style.propmt}>Great</h2>
          <p className={style.text}>
            {`You scored higher than ${value}% of the people who have taken these
              tests.`}
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
          <div onClick={handleClick} className={style.btn}>
            Continue
          </div>
        </div>
      </div>
    </div>
  );
};
