import React from "react";
import Header from "~/Components/Layout/Components/Header";
import Sidebar from "~/Components/Layout/Components/Sidebar";
import Selection from "~/Components/Layout/Components/Selection";

import classNames from "classnames/bind";
import styles from "./home.module.scss";
import Content from "~/Components/Layout/Components/Content";

const cx = classNames.bind(styles);

function Home() {
  return (
    <div>
      <Header />
      <div className={cx("wrapper")}>
        <div className={cx("sidebar")}>
          <Sidebar />
        </div>
        <div className={cx("main")}>
          <Selection />
          <Content />
        </div>
      </div>
    </div>
  );
}

export default Home;
