import React from "react";
import classNames from "classnames/bind";
import styles from "./content.module.scss";
import Video from "../Video";

const cx = classNames.bind(styles);
function Content() {
  return (
    <div className={cx("wrapper")}>
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
    </div>
  );
}

export default Content;
