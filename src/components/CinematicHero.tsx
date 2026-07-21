import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

export default function CinematicHero() {
  const sectionRef = useRef<HTMLElement>(null);

  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);

    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect =
        sectionRef.current.getBoundingClientRect();

      const distance = 1800; // longer lock

      const raw =
        Math.max(
          0,
          Math.min(
            (-rect.top) / distance,
            1
          )
        );

      setProgress(raw);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    handleScroll();

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  const fill = 100 - progress * 100;

  const brightness =
    0.25 + progress * .75;

  const scale =
    1 + progress * .08;

  return (

<section
ref={sectionRef}
id="hero-lock"
className="relative h-[420vh]"
>

<div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center bg-black">

{/* VIDEO */}

<video
autoPlay
muted
loop
playsInline
className="absolute inset-0 w-full h-full object-cover transition-all duration-300"
style={{
filter:`brightness(${brightness})`,
transform:`scale(${scale})`
}}
>

<source
src="https://videos.pexels.com/video-files/3571263/3571263-sd_640_360_25fps.mp4"
/>

</video>


{/* overlay */}

<div className="absolute inset-0 bg-black/40"/>


{/* content */}

<div
className={`
relative
z-20
text-center
px-6
transition-all
duration-1000
${visible
? "opacity-100 translate-y-0"
: "opacity-0 translate-y-8"}
`}
>

{/* MORVEX */}

<div className="relative flex justify-center items-center">

{/* outline */}

<h1
className="
text-[18vw]
md:text-[14vw]
font-black
uppercase
leading-none
tracking-tight
text-transparent
select-none
"
style={{
WebkitTextStroke:
"2px rgba(255,255,255,.85)"
}}
>

MORVEX

</h1>


{/* fill */}

<h1
className="
absolute
inset-0
flex
justify-center
items-center
text-[18vw]
md:text-[14vw]
font-black
uppercase
leading-none
tracking-tight
text-white
overflow-hidden
pointer-events-none
select-none
"
style={{
clipPath:
`inset(${fill}% 0 0 0)`,

transition:
"clip-path .18s ease-out"
}}
>

MORVEX

</h1>

</div>


{/* subtitle */}

<div
className={`
transition-all
duration-700
delay-100
${progress>.65
? "opacity-100 translate-y-0"
: "opacity-0 translate-y-6"}
`}
>

<p className="
mt-6
uppercase
tracking-[0.45em]
text-white/70
text-xs
md:text-base
">

WE BUILD WORLDS

</p>

</div>



{/* button */}

<div
className={`
transition-all
duration-700
delay-200
${progress>.72
? "opacity-100 translate-y-0"
: "opacity-0 translate-y-8"}
`}
>

<Link
to="/about"
className="
group
relative
inline-flex
items-center
justify-center
mt-10
px-10
py-4
overflow-hidden
border
border-white/30
uppercase
tracking-[0.25em]
text-sm
hover:-translate-y-1
active:translate-y-1
transition-all
duration-500
hover:shadow-[0_20px_40px_rgba(255,255,255,.15)]
"
>

<span
className="
relative
z-20
transition-colors
duration-500
group-hover:text-black
"
>

EXPLORE OUR VISION

</span>


<div
className="
absolute
inset-0
bg-white
translate-y-full
group-hover:translate-y-0
transition-transform
duration-500
"
/>

<span className="
absolute
inset-0
mix-blend-difference
"/>

</Link>

</div>


</div>



{/* arrow */}

<div
className="
absolute
bottom-12
left-55
-translate-x-1/2
animate-bounce
z-30
"
>

<ChevronDown
className="
w-8
h-8
text-white/60
"
/>

</div>

</div>

</section>

  );
}