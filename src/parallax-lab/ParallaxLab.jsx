import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../components/Header";
import HomepageSections from "../components/HomepageSections";
import SecondSection from "../components/SecondSection";
import SkyBackground from "../components/SkyBackground";
import { ParallaxHero } from "./ParallaxHero";
import "../styles/global.css";
import "../styles/site-shell.css";
import "../styles/sky.css";
import "../styles/homepage-sections.css";
import "./parallax-lab.css";

gsap.registerPlugin(ScrollTrigger);

const DEFAULT_CONTROLS = {
  scroll: true,
  pointer: true,
  idle: true,
  intensity: 84,
};

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function ParallaxLab() {
  const compositeRef = useRef(null);
  const skyRef = useRef(null);
  const unlockContentRef = useRef(null);
  const unlockCutoutsRef = useRef(null);
  const unlockGlassRef = useRef(null);
  const [skyRevealed, setSkyRevealed] = useState(prefersReducedMotion);
  const [parallaxReady, setParallaxReady] = useState(prefersReducedMotion);

  useEffect(() => {
    document.body.classList.add("sky-prototype-active");
    document.body.classList.add("parallax-page-active");
    return () => {
      document.body.classList.remove("sky-prototype-active");
      document.body.classList.remove("parallax-page-active");
    };
  }, []);

  useLayoutEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return undefined;

    const context = gsap.context(() => {
      const sky = skyRef.current;
      const unlockContent = unlockContentRef.current;
      const unlockCutouts = unlockCutoutsRef.current;
      const unlockGlass = unlockGlassRef.current;

      if (!sky || !unlockContent || !unlockCutouts || !unlockGlass) return;

      let revealActive = false;
      let settled = false;
      const unlockTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sky,
          start: "top bottom",
          end: "top top",
          scrub: true,
          invalidateOnRefresh: true,
          onUpdate: ({ progress }) => {
            const nextRevealActive = progress >= 0.88;
            const nextSettled = progress >= 0.98;

            if (nextRevealActive !== revealActive) {
              revealActive = nextRevealActive;
              setSkyRevealed(nextRevealActive);
            }
            if (nextSettled !== settled) {
              settled = nextSettled;
              setParallaxReady(nextSettled);
            }
          },
        },
      });

      unlockTimeline
        .fromTo(
          unlockContent,
          { y: () => -window.innerHeight },
          { y: 0, ease: "none" },
          0,
        )
        .fromTo(
          unlockCutouts,
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 0.18, ease: "power1.out" },
          0,
        )
        .fromTo(
          unlockGlass,
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 0.18, ease: "power1.out" },
          0,
        )
        .to(
          ".parallax-hero-copy--ocean",
          {
            y: () => -Math.min(window.innerHeight * 0.32, 300),
            autoAlpha: 0,
            scale: 0.98,
            ease: "none",
          },
          0,
        );
    }, compositeRef);

    return () => context.revert();
  }, []);

  useEffect(() => {
    const sky = skyRef.current;
    if (!sky) return undefined;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const desktopWheel = window.matchMedia(
      "(min-width: 768px) and (hover: hover) and (pointer: fine)",
    ).matches;
    if (reducedMotion || !desktopWheel) return undefined;

    let accumulatedIntent = 0;
    let intentDirection = 0;
    let resetTimer = 0;
    let scrollTween;
    let snapDirection = 0;

    const resetIntentSoon = () => {
      window.clearTimeout(resetTimer);
      resetTimer = window.setTimeout(() => {
        accumulatedIntent = 0;
        intentDirection = 0;
      }, 220);
    };

    const snapTo = (destinationY, direction) => {
      const scrollState = { y: window.scrollY };
      const viewportDistance = Math.max(window.innerHeight, 1);
      const travelRatio = Math.min(Math.abs(destinationY - scrollState.y) / viewportDistance, 1);

      snapDirection = direction;
      document.documentElement.classList.add("sky-snap-active");
      scrollTween = gsap.to(scrollState, {
        y: destinationY,
        duration: gsap.utils.clamp(0.36, 0.82, 0.82 * travelRatio),
        ease: "power3.inOut",
        overwrite: true,
        onUpdate: () => window.scrollTo(0, scrollState.y),
        onComplete: () => {
          scrollTween = undefined;
          snapDirection = 0;
          setSkyRevealed(direction > 0);
          setParallaxReady(direction > 0);
          document.documentElement.classList.remove("sky-snap-active");
          ScrollTrigger.update();
        },
      });
    };

    const onWheel = (event) => {
      const targetY = sky.getBoundingClientRect().top + window.scrollY;
      const transitionStartY = Math.max(0, targetY - window.innerHeight);
      const currentY = window.scrollY;
      const direction = Math.sign(event.deltaY);
      const beforeSky = currentY < targetY - 2;
      const nearSkyStart =
        currentY > transitionStartY + 2 &&
        currentY <= targetY + Math.min(window.innerHeight * 0.22, 180);
      const shouldSnapForward = direction > 0 && beforeSky;
      const shouldSnapBack = direction < 0 && nearSkyStart;

      if (scrollTween?.isActive()) {
        event.preventDefault();

        if (direction !== 0 && direction !== snapDirection) {
          scrollTween.kill();
          scrollTween = undefined;
          snapDirection = 0;
          accumulatedIntent = 0;
          intentDirection = 0;
          snapTo(direction > 0 ? targetY : transitionStartY, direction);
        }
        return;
      }

      if (!shouldSnapForward && !shouldSnapBack) {
        accumulatedIntent = 0;
        intentDirection = 0;
        return;
      }

      if (direction !== intentDirection) {
        accumulatedIntent = 0;
        intentDirection = direction;
      }
      accumulatedIntent += Math.min(Math.abs(event.deltaY), 80);
      resetIntentSoon();
      if (accumulatedIntent < 72) return;

      event.preventDefault();
      accumulatedIntent = 0;
      intentDirection = 0;
      snapTo(shouldSnapForward ? targetY : transitionStartY, direction);
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.clearTimeout(resetTimer);
      scrollTween?.kill();
      document.documentElement.classList.remove("sky-snap-active");
    };
  }, []);

  return (
    <div ref={compositeRef} className="parallax-page sky-composite-page" id="top">
      <Header />
      <main>
        <ParallaxHero
          primaryHref="/contact"
          secondaryHref="/training"
          animateOnMount={false}
          initialQuestionComplete
        />
        <div ref={skyRef} id="sky-experience" className="sky-unlock-frame">
          <div ref={unlockCutoutsRef} className="sky-unlock-cutouts" aria-hidden="true">
            <span className="sky-unlock-cutouts__left" />
            <span className="sky-unlock-cutouts__right" />
          </div>
          <div ref={unlockGlassRef} className="sky-unlock-glass" aria-hidden="true">
            <span className="sky-unlock-glass__line" />
            <span className="sky-unlock-glass__shine" />
          </div>
          <div className="sky-prototype">
            <div ref={unlockContentRef} className="sky-unlock-content">
              <SkyBackground
                controls={DEFAULT_CONTROLS}
                pageRef={skyRef}
                revealed={skyRevealed}
                parallaxReady={parallaxReady}
              />
              <SecondSection revealed={skyRevealed} />
              <HomepageSections />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
