import classNames from "classnames/bind";
import {
  Creator,
  Cup,
  Fire,
  Flag,
  Game,
  Home,
  HomeAct,
  Info,
  KenhDangKi,
  Like,
  Music,
  NewPaper,
  OClock1,
  OClock2,
  Question,
  Setting,
  Short,
  ThuVien,
  Video,
  YTKids,
  YTMusic,
  YTTv,
} from "~/Components/Icons";
import Menu, { MenuItem } from "./Menu";
import styles from "./sidebar.module.scss";

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <div className={cx("wrapper")}>
      <Menu>
        <MenuItem title={"Trang chủ"} icon={<Home />} activeIcon={HomeAct} />
        <MenuItem title={"Short"} icon={<Short />} />
        <MenuItem title={"Kênh đăng ký"} icon={<KenhDangKi />} />
      </Menu>
      <Menu>
        <MenuItem title={"Thư viện"} icon={<ThuVien />} activeIcon={HomeAct} />
        <MenuItem title={"Video đã xem"} icon={<OClock1 />} />
        <MenuItem title={"Video của bạn"} icon={<Video />} />
        <MenuItem title={"Xem sau"} icon={<OClock2 />} />
        <MenuItem title={"Video đã thích"} icon={<Like />} />
      </Menu>
      <Menu>
        <h4>Khám phá</h4>
        <MenuItem title={"Thịnh hành"} icon={<Fire />} activeIcon={HomeAct} />
        <MenuItem title={"Âm nhạc"} icon={<Music />} />
        <MenuItem title={"Trò chơi "} icon={<Game />} />
        <MenuItem title={"Tin tức"} icon={<NewPaper />} />
        <MenuItem title={"Thể thao"} icon={<Cup />} />
      </Menu>
      <Menu>
        <h4>Dịch vụ khác của Youtube</h4>
        <MenuItem
          title={"Creator Studio"}
          icon={<Creator />}
          activeIcon={HomeAct}
        />
        <MenuItem title={"Youtube Music"} icon={<YTMusic />} />
        <MenuItem title={"Youtube Kids"} icon={<YTKids />} />
        <MenuItem title={"Youtube TV"} icon={<YTTv />} />
      </Menu>
      <Menu>
        <MenuItem title={"Cài đặt"} icon={<Setting />} activeIcon={HomeAct} />
        <MenuItem title={"Nhật ký báo cáo"} icon={<Flag />} />
        <MenuItem title={"Trợ giúp"} icon={<Question />} />
        <MenuItem title={"Gửi ý kiến phản hồi"} icon={<Info />} />
      </Menu>
      <div className={cx("footer")}>
        <div className={cx("links")}>
          <a href="https://www.youtube.com/about/">Giới thiệu</a>
          <a href="https://www.youtube.com/about/press/">Báo chí</a>
          <a href="https://www.youtube.com/about/copyright/">Bản quyền</a>
          <a href="/t/contact_us/">Liên hệ với chúng tôi</a>
          <a href="https://www.youtube.com/creators/">Người sáng tạo</a>
          <a href="https://www.youtube.com/ads/">Quảng cáo</a>
          <a href="https://developers.google.com/youtube">Nhà phát triển</a>
        </div>

        <div className={cx("links")}>
          <a href="/t/terms">Điều khoản</a>
          <a href="/t/privacy">Quyền riêng tư</a>
          <a href="https://www.youtube.com/about/policies/">
            Chính sách và an toàn
          </a>
          <a href="https://www.youtube.com/howyoutubeworks?utm_campaign=ytgen&amp;utm_source=ythp&amp;utm_medium=LeftNav&amp;utm_content=txt&amp;u=https%3A%2F%2Fwww.youtube.com%2Fhowyoutubeworks%3Futm_source%3Dythp%26utm_medium%3DLeftNav%26utm_campaign%3Dytgen">
            Cách YouTube hoạt động
          </a>
          <a href="/new">Thử các tính năng mới</a>
        </div>

        <div className={cx("copy-right")}>
          <div dir="ltr">© 2023 Google LLC</div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
