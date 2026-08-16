"use client";

import { useEffect, useRef } from "react";

const revealSelector = [
  ".tile",
  ".sectionIndex",
  ".overline",
  ".aboutGrid > *",
  ".signalGrid article",
  ".project",
  ".leadershipQuote > *",
  ".trajectoryPath article",
  ".credentialGrid article",
  ".footerLead > *",
].join(",");

export function ScrollEffects() {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    const progress = progressRef.current;
    const heroTitle = document.querySelector<HTMLElement>(".hero h1");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const revealTargets = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));
    let frame = 0;

    revealTargets.forEach((target, index) => {
      target.classList.add("revealTarget");
      target.style.setProperty("--reveal-delay", `${(index % 5) * 55}ms`);
    });
    root.classList.add("motionReady");

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("isVisible");
        revealObserver.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -8%", threshold: 0.08 });

    revealTargets.forEach((target) => revealObserver.observe(target));

    const paint = () => {
      frame = 0;
      const maxScroll = Math.max(1, root.scrollHeight - window.innerHeight);
      const scrollProgress = Math.min(1, window.scrollY / maxScroll);

      if (progress) progress.style.transform = `scaleX(${scrollProgress})`;
      if (heroTitle) {
        const shift = reducedMotion.matches ? 0 : Math.min(34, window.scrollY * 0.055);
        heroTitle.style.transform = `translate3d(0, ${shift}px, 0)`;
      }
    };

    const requestPaint = () => {
      if (!frame) frame = window.requestAnimationFrame(paint);
    };

    paint();
    window.addEventListener("scroll", requestPaint, { passive: true });
    window.addEventListener("resize", requestPaint);
    reducedMotion.addEventListener("change", requestPaint);

    return () => {
      revealObserver.disconnect();
      root.classList.remove("motionReady");
      window.removeEventListener("scroll", requestPaint);
      window.removeEventListener("resize", requestPaint);
      reducedMotion.removeEventListener("change", requestPaint);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return <div ref={progressRef} className="scrollProgress" aria-hidden="true" />;
}
