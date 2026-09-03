import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CloudLayer from "./CloudLayer";
import cloudLarge from "../../assets/cloud-large.webp";
import cloudMedium from "../../assets/cloud-medium.webp";
import cloudSmall from "../../assets/cloud-small.webp";

gsap.registerPlugin(ScrollTrigger);

const CLOUDS = [
  {
    key: "large",
    className: "cloud-layer--large",
    src: cloudLarge,
    width: 757,
    height: 534,
    scrollX: 7,
    scrollY: -0.38,
    pointer: 8,
    idleX: 8,
    idleY: 9,
    duration: 19,
    delay: 0.4,
  },
  {
    key: "medium",
    className: "cloud-layer--medium",
    src: cloudMedium,
    width: 659,
    height: 384,
    scrollX: -9,
    scrollY: -0.52,
    pointer: 14,
    idleX: -10,
    idleY: 7,
    duration: 15,
    delay: 1.1,
  },
  {
    key: "small",
    className: "cloud-layer--small",
    src: cloudSmall,
    width: 511,
    height: 324,
    scrollX: 5,
    scrollY: -0.68,
    pointer: 22,
    idleX: 11,
    idleY: -12,
    duration: 13,
    delay: 0.8,
  },
  {
    key: "atmosphere",
    className: "cloud-layer--atmosphere",
    src: cloudLarge,
    width: 757,
    height: 534,
    scrollX: 2,
    scrollY: -0.18,
    pointer: 4,
    idleX: -6,
    idleY: 5,
    duration: 22,
    delay: 1.6,
  },
  {
    key: "flowOne",
    className: "cloud-layer--flow-one",
    src: cloudLarge,
    width: 757,
    height: 534,
    scrollX: 8,
    scrollY: -0.82,
    pointer: 9,
    idleX: 9,
    idleY: -7,
    duration: 18,
    delay: 0.7,
    localScroll: true,
  },
  {
    key: "flowTwo",
    className: "cloud-layer--flow-two",
    src: cloudMedium,
    width: 659,
    height: 384,
    scrollX: -7,
    scrollY: -0.76,
    pointer: 12,
    idleX: -8,
    idleY: 8,
    duration: 16,
    delay: 1.4,
    localScroll: true,
  },
  {
    key: "flowThree",
    className: "cloud-layer--flow-three",
    src: cloudSmall,
    width: 511,
    height: 324,
    scrollX: 6,
    scrollY: -0.72,
    pointer: 16,
    idleX: 10,
    idleY: -6,
    duration: 14,
    delay: 0.3,
    localScroll: true,
  },
  {
    key: "upperDrift",
    className: "cloud-layer--upper-drift",
    src: cloudMedium,
    width: 659,
    height: 384,
    scrollX: -10,
    scrollY: -0.58,
    pointer: 11,
    idleX: -9,
    idleY: 7,
    duration: 17,
    delay: 0.9,
    localScroll: true,
  },
  {
    key: "middleDrift",
    className: "cloud-layer--middle-drift",
    src: cloudLarge,
    width: 757,
    height: 534,
    scrollX: 9,
    scrollY: -0.7,
    pointer: 8,
    idleX: 7,
    idleY: -8,
    duration: 21,
    delay: 1.3,
    localScroll: true,
  },
  {
    key: "lowerDrift",
    className: "cloud-layer--lower-drift",
    src: cloudSmall,
    width: 511,
    height: 324,
    scrollX: -12,
    scrollY: -0.78,
    pointer: 18,
    idleX: -11,
    idleY: 6,
    duration: 15,
    delay: 0.5,
    localScroll: true,
  },
  {
    key: "veilLeft",
    className: "cloud-layer--veil-left",
    src: cloudSmall,
    width: 511,
    height: 324,
    scrollX: 15,
    scrollY: -0.46,
    scrollRotate: 0.7,
    pointer: 25,
    idleX: 17,
    idleY: 9,
    idleRotate: 0.45,
    duration: 16,
    delay: 0.2,
    localScroll: true,
  },
  {
    key: "veilRight",
    className: "cloud-layer--veil-right",
    src: cloudMedium,
    width: 659,
    height: 384,
    scrollX: -16,
    scrollY: -0.9,
    scrollRotate: -0.9,
    pointer: 20,
    idleX: -15,
    idleY: 11,
    idleRotate: -0.55,
    duration: 18,
    delay: 1,
    localScroll: true,
  },
  {
    key: "crosswindOne",
    className: "cloud-layer--crosswind-one",
    src: cloudLarge,
    width: 757,
    height: 534,
    scrollX: 18,
    scrollY: -1.08,
    scrollRotate: 1,
    pointer: 14,
    idleX: 18,
    idleY: -10,
    idleRotate: 0.5,
    duration: 20,
    delay: 0.6,
    localScroll: true,
  },
  {
    key: "crosswindTwo",
    className: "cloud-layer--crosswind-two",
    src: cloudSmall,
    width: 511,
    height: 324,
    scrollX: -20,
    scrollY: -0.64,
    scrollRotate: -1.1,
    pointer: 30,
    idleX: -19,
    idleY: 12,
    idleRotate: -0.7,
    duration: 13,
    delay: 1.2,
    localScroll: true,
  },
  {
    key: "projectMist",
    className: "cloud-layer--project-mist",
    src: cloudMedium,
    width: 659,
    height: 384,
    scrollX: 17,
    scrollY: -0.86,
    scrollRotate: 0.75,
    pointer: 22,
    idleX: 16,
    idleY: 10,
    idleRotate: 0.5,
    duration: 17,
    delay: 0.4,
    localScroll: true,
  },
  {
    key: "projectFront",
    className: "cloud-layer--project-front",
    src: cloudLarge,
    width: 757,
    height: 534,
    scrollX: -19,
    scrollY: -1.16,
    scrollRotate: -1.2,
    pointer: 18,
    idleX: -17,
    idleY: -12,
    idleRotate: -0.6,
    duration: 22,
    delay: 1.5,
    localScroll: true,
  },
  {
    key: "learningWisp",
    className: "cloud-layer--learning-wisp",
    src: cloudSmall,
    width: 511,
    height: 324,
    scrollX: 22,
    scrollY: -0.7,
    scrollRotate: 1.35,
    pointer: 32,
    idleX: 20,
    idleY: 13,
    idleRotate: 0.8,
    duration: 14,
    delay: 0.8,
    localScroll: true,
  },
  {
    key: "voiceBank",
    className: "cloud-layer--voice-bank",
    src: cloudMedium,
    width: 659,
    height: 384,
    scrollX: -18,
    scrollY: -1.02,
    scrollRotate: -0.85,
    pointer: 19,
    idleX: -16,
    idleY: 11,
    idleRotate: -0.45,
    duration: 19,
    delay: 0.3,
    localScroll: true,
  },
  {
    key: "footerWisp",
    className: "cloud-layer--footer-wisp",
    src: cloudLarge,
    width: 757,
    height: 534,
    scrollX: 16,
    scrollY: -1.12,
    scrollRotate: 0.9,
    pointer: 15,
    idleX: 18,
    idleY: -11,
    idleRotate: 0.5,
    duration: 21,
    delay: 1.1,
    localScroll: true,
  },
  {
    key: "deepHaze",
    className: "cloud-layer--deep-haze",
    src: cloudLarge,
    width: 757,
    height: 534,
    scrollX: -6,
    scrollY: -0.28,
    scrollRotate: -0.25,
    pointer: 6,
    idleX: -10,
    idleY: 7,
    idleRotate: -0.2,
    duration: 25,
    delay: 1.8,
    localScroll: true,
  },
];

export default function SkyBackground({ controls, pageRef, revealed, parallaxReady }) {
  const rootRef = useRef(null);
  const layersRef = useRef({});

  const registerLayer = (key, type, node) => {
    layersRef.current[key] ??= {};
    layersRef.current[key][type] = node;
  };

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const scrollLayers = Object.values(layersRef.current)
      .map((layer) => layer.scroll)
      .filter(Boolean);

    if (reducedMotion) {
      gsap.set(scrollLayers, { autoAlpha: 1 });
      return undefined;
    }

    const tween = gsap.to(scrollLayers, {
      autoAlpha: revealed ? 1 : 0,
      y: 0,
      duration: revealed ? 0.52 : 0.18,
      stagger: revealed ? 0.055 : 0,
      ease: revealed ? "power2.out" : "power1.out",
      overwrite: "auto",
    });

    return () => tween.kill();
  }, [revealed]);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const page = pageRef.current ?? root?.closest(".parallax-page, .marketing-page");
    if (!root || !page) return undefined;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const desktopPointer = window.matchMedia("(min-width: 768px) and (any-hover: hover) and (any-pointer: fine)").matches;
    const mobileFactor = window.matchMedia("(max-width: 767px)").matches ? 0.46 : 1;
    const intensity = controls.intensity / 100;
    const cleanups = [];

    // Reduced motion leaves every cloud fully visible and stationary.
    if (reducedMotion) {
      Object.values(layersRef.current).forEach((layer) => {
        gsap.set([layer.scroll, layer.pointer, layer.idle], { clearProps: "transform" });
      });
      return undefined;
    }

    if (!parallaxReady) {
      Object.values(layersRef.current).forEach((layer) => {
        gsap.set([layer.scroll, layer.pointer, layer.idle], { clearProps: "transform" });
      });
      return undefined;
    }

    const context = gsap.context(() => {
      Object.entries(layersRef.current).forEach(([key, layer]) => {
        const config = CLOUDS.find((cloud) => cloud.key === key);
        if (!config || !layer.scroll || !layer.pointer || !layer.idle) return;

        if (controls.scroll) {
          if (config.localScroll) {
            gsap.fromTo(
              layer.scroll,
              {
                xPercent: -config.scrollX * 0.35 * intensity * mobileFactor,
                y: () => window.innerHeight * 0.3 * intensity * mobileFactor,
                rotation: -(config.scrollRotate ?? 0) * 0.4 * intensity * mobileFactor,
              },
              {
                xPercent: config.scrollX * intensity * mobileFactor,
                y: () => window.innerHeight * config.scrollY * intensity * mobileFactor,
                rotation: (config.scrollRotate ?? 0) * intensity * mobileFactor,
                ease: "none",
                scrollTrigger: {
                  trigger: layer.scroll,
                  start: "top bottom+=20%",
                  end: "bottom top-=20%",
                  scrub: 1.15,
                  invalidateOnRefresh: true,
                },
              },
            );
          } else {
            gsap.to(layer.scroll, {
              xPercent: config.scrollX * intensity * mobileFactor,
              y: () => window.innerHeight * config.scrollY * intensity * mobileFactor,
              rotation: (config.scrollRotate ?? 0) * intensity * mobileFactor,
              ease: "none",
              scrollTrigger: {
                trigger: page,
                start: "top top",
                end: "bottom bottom",
                scrub: 1.15,
                invalidateOnRefresh: true,
              },
            });
          }
        }

        if (controls.idle) {
          gsap.to(layer.idle, {
            x: config.idleX * intensity,
            y: config.idleY * intensity,
            rotation: (config.idleRotate ?? 0) * intensity,
            duration: config.duration,
            delay: config.delay,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        }
      });

      if (controls.pointer && desktopPointer) {
        const setters = CLOUDS.map((config) => {
          const pointerLayer = layersRef.current[config.key]?.pointer;
          if (!pointerLayer) return null;
          return {
            config,
            x: gsap.quickTo(pointerLayer, "x", { duration: 0.75, ease: "power3.out" }),
            y: gsap.quickTo(pointerLayer, "y", { duration: 0.75, ease: "power3.out" }),
          };
        }).filter(Boolean);

        const onPointerMove = (event) => {
          const normalX = event.clientX / window.innerWidth - 0.5;
          const normalY = event.clientY / window.innerHeight - 0.5;
          setters.forEach(({ config, x, y }) => {
            const limit = config.pointer * intensity;
            x(normalX * limit * 2);
            y(normalY * limit * 2);
          });
        };

        const onPointerLeave = () => {
          setters.forEach(({ x, y }) => {
            x(0);
            y(0);
          });
        };

        window.addEventListener("pointermove", onPointerMove, { passive: true });
        document.documentElement.addEventListener("mouseleave", onPointerLeave);
        cleanups.push(() => {
          window.removeEventListener("pointermove", onPointerMove);
          document.documentElement.removeEventListener("mouseleave", onPointerLeave);
        });
      }
    }, root);

    const images = [...root.querySelectorAll("img")];
    const refresh = () => requestAnimationFrame(() => ScrollTrigger.refresh());
    images.forEach((image) => {
      if (!image.complete) {
        image.addEventListener("load", refresh, { once: true });
        cleanups.push(() => image.removeEventListener("load", refresh));
      }
    });
    refresh();

    return () => {
      cleanups.forEach((cleanup) => cleanup());
      context.revert();
    };
  }, [
    controls.idle,
    controls.intensity,
    controls.pointer,
    controls.scroll,
    pageRef,
    parallaxReady,
  ]);

  return (
    <div ref={rootRef} className="sky-background" aria-hidden="true">
      {CLOUDS.map((cloud) => (
        <CloudLayer
          key={cloud.key}
          className={cloud.className}
          src={cloud.src}
          width={cloud.width}
          height={cloud.height}
          priority={cloud.key === "large"}
          registerLayer={(type, node) => registerLayer(cloud.key, type, node)}
        />
      ))}
    </div>
  );
}
