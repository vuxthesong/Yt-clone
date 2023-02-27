import styles from "./header.module.scss";
import classNames from "classnames/bind";
import { Camera, Logo, MenuIcon, Ring } from "~/Components/Icons";
import Avatar from "~/Components/Avatar";

const cx = classNames.bind(styles);
function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("header-1")}>
        <div className={cx("menu-icon")}>
          <MenuIcon />
        </div>
        <div className={cx("logo")}>
          <Logo />
        </div>
      </div>
      <div>2</div>
      <div className={cx("header-1")}>
        <div className={cx("menu-icon")}>
          <Camera />
        </div>
        <div className={cx("menu-icon")}>
          <Ring />
        </div>
        <div className={cx("avatar")}>
          <Avatar
            url="https://yt3.ggpht.com/yti/AHXOFjULBeR_Qx1UQbUb0AXQV3P6krLMpgYgt43RNUD5Eg=s88-c-k-c0x00ffffff-no-rj-mo"
            medium
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
