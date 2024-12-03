import React from "react";
import style from "./Container.module.css";

function Container({ children }) {
  return <div className={style.outerContainer}>
    {children}
    </div>;
}

export default Container;
