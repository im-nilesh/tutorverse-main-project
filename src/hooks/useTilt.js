import { useRef } from "react";

// Pointer-driven 3D tilt; writes CSS variables so React never re-renders.
export default function useTilt(max = 10) {
  const ref = useRef(null);
  const set = (rx, ry, mx, my) => {
    const s = ref.current?.style;
    if (!s) return;
    s.setProperty("--rx", `${rx}deg`); s.setProperty("--ry", `${ry}deg`);
    s.setProperty("--mx", `${mx}%`); s.setProperty("--my", `${my}%`);
  };
  const onMouseMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
    set((0.5 - y) * max * 2, (x - 0.5) * max * 2, x * 100, y * 100);
  };
  return { ref, onMouseMove, onMouseLeave: () => set(0, 0, 50, 50) };
}
