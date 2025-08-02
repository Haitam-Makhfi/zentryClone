// import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText);
export default function rotatationTextAnimation(
  element: HTMLElement,
  tl: GSAPTimeline | null,
  splitRe: SplitText | null,
  xValue: number = 90,
  yValue: number = -90,
  reverse: boolean = false,
  animationDuration: number = 1,
  opacityDuration: number = 0.1
): [tl: GSAPTimeline, split: SplitText] | void {
  // if (!element) return;
  if (reverse) {
    if (!splitRe) return;
    if (!tl) return;
    tl.fromTo(
      element,
      {
        transformPerspective: 600,
        rotationX: 0,
        rotationY: 0,
        y: 0,
        x: 0,
      },
      {
        rotationX: xValue,
        rotationY: yValue,
        y: 45,
        x: 150,
        duration: animationDuration,
        ease: "power2.out",
      }
    );
    tl.fromTo(
      splitRe.chars,
      { opacity: 1 },
      {
        stagger: 0.05,
        reversed: true,
        opacity: 0,
        duration: opacityDuration,
        ease: "power2.out",
      },
      "<"
    );
    // Add cleanup callback at the end of the animation
    tl.call(() => {
      splitRe.revert();
    });
    tl.set(
      element,
      {
        display: "none",
        visibility: "hidden",
        y: 0,
        x: 0,
      },
      ">"
    );
  } else {
    // if (!textAnimationTl) return;
    const tl = gsap.timeline();
    let split = SplitText.create(element, {
      type: "chars",
      charsClass: "split-char",
    });
    tl.set(element, {
      display: "block",
      visibility: "visible",
      rotate: 0,
    });
    tl.fromTo(
      element,
      {
        transformPerspective: 600,
        rotationX: xValue,
        rotationY: yValue,
      },
      {
        rotationX: 0,
        rotationY: 0,
        duration: animationDuration,
        ease: "power2.out",
      }
    );
    tl.fromTo(
      split.chars,
      {
        opacity: 0,
      },
      {
        stagger: 0.05,
        opacity: 1,
        duration: opacityDuration,
        ease: "power2.out",
      },
      "<0.1"
    );
    return [tl, split];
  }
}
