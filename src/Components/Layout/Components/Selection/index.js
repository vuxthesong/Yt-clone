import React from "react";
import classNames from "classnames/bind";
import styles from "./selection.module.scss";
import Button from "../Button";
import { Back, Next } from "~/Components/Icons";

const cx = classNames.bind(styles);
function Selection() {
  const selection = [
    "Tất cả",
    "Âm nhạc",
    "Danh sách kết hợp",
    "Trò chơi",
    "Trực tiếp",
    "Hài kịch tình huống",
    "Đọc rap",
    "Bóng đá",
    "Hoạt hình",
    "Trò chơi hành động phiêu lưu",
    "Nấu ăn",
    "Thú cưng",
    "Mới tải lên gần đây",
    "Đã xem",
    "Đề xuất mới",
  ];

  return (
    <div className={cx("wrapper")}>
      <div className={cx("icon-next")}>
        <Next />
      </div>
      <div className={cx("selection")}>
        {selection.map((text, index) => {
          return <Button text={text} key={index} />;
        })}
      </div>
      <div className={cx("icon-back")}>
        <Back />
      </div>
    </div>
  );
}

export default Selection;
