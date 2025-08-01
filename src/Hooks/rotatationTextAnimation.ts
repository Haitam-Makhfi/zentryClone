// import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText);
export default function rotatationTextAnimation(
  element: HTMLElement,
  xValue: number = 90,
  yValue: number = -90,
  reverse: boolean = false,
  animationDuration: number = 1,
  opacityDuration: number = 0.1
): GSAPTimeline | void {
  if (!element) return;
  const textAnimationTl = gsap.timeline();
  let split = SplitText.create(element, {
    type: "chars",
    charsClass: "split-char",
  });
  if (reverse) {
    textAnimationTl.fromTo(
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
    textAnimationTl.fromTo(
      split.chars,
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
    textAnimationTl.set(
      element,
      {
        display: "none",
        visibility: "hidden",
      },
      ">"
    );
  } else {
    textAnimationTl.set(element, {
      display: "block",
      visibility: "visible",
    });
    textAnimationTl.fromTo(
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
    textAnimationTl.fromTo(
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
      "0.20"
    );
  }
}
