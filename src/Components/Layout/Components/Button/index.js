import classNames from "classnames/bind";
import styles from "./button.module.scss";

const cx = classNames.bind(styles);

function Button({ text, color = "#F2F2F2" }) {
  return <button className={cx("wrapper")}>{text}</button>;
}

export default Button;
