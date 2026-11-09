import useTilt from "../hooks/useTilt";

export default function Tilt({ as: Tag = "div", max = 8, className = "", children, ...rest }) {
  const tilt = useTilt(max);
  return <Tag className={`tilt ${className}`} {...tilt} {...rest}>{children}</Tag>;
}
