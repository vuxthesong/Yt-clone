import classNames from "classnames/bind";
import styles from "./avatar.module.scss";

const cx = classNames.bind(styles);

function Avatar({
  className,
  small = false,
  medium = false,
  big = false,
  url,
  ...passProps
}) {
  const props = {
    ...passProps,
  };

  const classes = cx("wrapper", {
    [className]: className,
    small,
    medium,
    big,
  });

  return <img className={classes} {...props} src={url} alt="avatar-user" />;
}

export default Avatar;
