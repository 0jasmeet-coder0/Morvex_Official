import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {

    const move = (e: MouseEvent) => {

      if (!dot.current || !ring.current)
        return;

      dot.current.style.transform =
        `translate(${e.clientX}px,
        ${e.clientY}px)`;

      ring.current.animate(
        {
          transform:
          `translate(${e.clientX}px,
          ${e.clientY}px)`
        },

        {
          duration:250,
          fill:"forwards",
          easing:"ease-out"
        }
      );
    };

    window.addEventListener(
      "mousemove",
      move
    );

    return () =>
      window.removeEventListener(
        "mousemove",
        move
      );

  },[]);

  return (
    <>

      {/* FOLLOWING RING */}

      <div
      ref={ring}
      className="
      fixed
      top-0
      left-0
      w-12
      h-12
      border
      border-white
      rounded-full
      pointer-events-none
      z-[999999]
      -translate-x-1/2
      -translate-y-1/2
      mix-blend-difference
      "
      />

      {/* MAIN CURSOR */}

      <div
      ref={dot}
      className="
      fixed
      top-0
      left-0
      w-4
      h-4
      bg-white
      rounded-full
      pointer-events-none
      z-[999999]
      -translate-x-1/2
      -translate-y-1/2
      mix-blend-difference
      "
      />

    </>
  );
}