import styles from "./header.module.scss";
import classNames from "classnames/bind";
import {
  Camera,
  Close,
  Logo,
  MenuIcon,
  Ring,
  Search,
} from "~/Components/Icons";
import Avatar from "~/Components/Avatar";
import MicIcon from "@mui/icons-material/Mic";

const cx = classNames.bind(styles);
const src = "//www.gstatic.com/inputtools/images/tia.png";
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
      <div className={cx("center")}>
        <div className={cx("search-container")}>
          <form className={cx("form-search")}>
            <div className={cx("search-icon")}>
              <Search width="2.0rem" height="2.0rem" />
            </div>
            <input placeholder="Tìm Kiếm" spellCheck={false} />
            <img src={src} alt="keyboard" />
            <div className={cx("close-icon")}>
              <Close />
            </div>
          </form>
          <div className={cx("btn-search")}>
            <Search />
          </div>
        </div>
        <div className={cx("mic-icon")}>
          <MicIcon sx={{ fontSize: 24 }} />
        </div>
      </div>
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
