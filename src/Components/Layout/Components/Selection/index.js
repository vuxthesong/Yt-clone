import React from "react";
import classNames from "classnames/bind";
import styles from "./selection.module.scss";
import Button from "../Button";

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
      {selection.map((text, index) => {
        return <Button text={text} key={index} />;
      })}
    </div>
  );
}

export default Selection;
