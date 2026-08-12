"use client";

import { useEffect, useRef } from "react";

export function ScrollColorTitle() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    if (!title) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const paint = () => {
      frame = 0;

      if (reducedMotion.matches) {
        title.style.color = "#fff";
        title.style.textShadow = "none";
        return;
      }

      const bounds = title.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, (window.innerHeight - bounds.top) / (window.innerHeight + bounds.height)));
      const green = Math.round(255 - 210 * progress);
      const blue = Math.round(255 - 180 * progress);

      title.style.color = `rgb(255, ${green}, ${blue})`;
      title.style.textShadow = `0 ${Math.round(10 * progress)}px ${Math.round(28 * progress)}px rgba(18, 0, 26, ${(.32 * progress).toFixed(2)})`;
    };

    const requestPaint = () => {
      if (!frame) frame = window.requestAnimationFrame(paint);
    };

    paint();
    window.addEventListener("scroll", requestPaint, { passive: true });
    window.addEventListener("resize", requestPaint);
    reducedMotion.addEventListener("change", requestPaint);

    return () => {
      window.removeEventListener("scroll", requestPaint);
      window.removeEventListener("resize", requestPaint);
      reducedMotion.removeEventListener("change", requestPaint);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return <h2 ref={titleRef} className="connectTitle">Let's<br />connect.</h2>;
}
