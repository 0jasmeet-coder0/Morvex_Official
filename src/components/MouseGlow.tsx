import { useEffect, useRef } from "react";

export default function MouseGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!glowRef.current) return;

      glowRef.current.animate(
        {
          transform: `translate(
            ${e.clientX - 200}px,
            ${e.clientY - 200}px
          )`
        },

        {
          duration: 400,
          fill: "forwards",
          easing: "ease-out"
        }
      );
    };

    window.addEventListener("mousemove", move);

    return () =>
      window.removeEventListener(
        "mousemove",
        move
      );
  }, []);

  return (
    <div
      ref={glowRef}
      className="
      pointer-events-none
      fixed
      top-0
      left-0
      z-[999]
      h-[400px]
      w-[400px]
      rounded-full
      bg-white/[0.04]
      blur-[120px]
      mix-blend-screen
      "
    />
  );
}