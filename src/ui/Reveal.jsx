import useReveal from "../hooks/useReveal";

export default function Reveal({ className = "", children, ...rest }) {
  const ref = useReveal();
  return <section ref={ref} className={`reveal section-wrap ${className}`} {...rest}>{children}</section>;
}
