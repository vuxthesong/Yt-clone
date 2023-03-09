import React from "react";
import classNames from "classnames/bind";
import styles from "./content.module.scss";

const cx = classNames.bind(styles);
function Content() {
  return <div className={cx("wrapper")}>Content</div>;
}

export default Content;
