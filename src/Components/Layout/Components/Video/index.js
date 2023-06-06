import React from "react";
import classNames from "classnames/bind";
import styles from "./video.module.scss";

const cx = classNames.bind(styles);

function Video() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("thumbnail")}>
        <img
          src="https://i.ytimg.com/vi/F89qUp7x4YY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCDofW8rz_H0euepjbVnu6zb7e3jQ"
          alt="thumbnail"
        />
      </div>
      <div className={cx("info")}>
        <div className={cx("avatar")}>
          <img
            src="https://yt3.ggpht.com/ytc/AL5GRJWZ97OpavzPhc_Hca9gvGQ6TYL6sx2e9GtONWig=s68-c-k-c0x00ffffff-no-rj"
            alt="avatar"
          />
        </div>
        <div className={cx("over")}>
          <div className={cx("tittle")}>
            <a href="fa">
              FULHAM - ARSENAL: ÁP ĐẢO HOÀN TOÀN, TROSSARD THĂNG HOA VỚI
              HATTRICK KIẾN TẠO | NGOẠI HẠNG ANH 22/23
            </a>
          </div>
          <div className={cx("chanel-name")}>Kplus Sports</div>
          <div className={cx("information")}>44 N lượt xem . 50 phút trước</div>
        </div>
      </div>
    </div>
  );
}

export default Video;
