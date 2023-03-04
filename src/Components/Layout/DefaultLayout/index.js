import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";

import classNames from "classnames/bind";
import styles from "./defaultLayout.scss";

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className={cx("wrapper")}>
        <Sidebar />
        <div className={cx("content")}>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
