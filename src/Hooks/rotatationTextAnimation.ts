import gsap from "gsap";
import SplitText from "gsap/SplitText";
export default function rotatationTextAnimation(
  element: HTMLElement,
  xValue: number = 90,
  yValue: number = -90,
  animationDuration: number = 1.3,
  opacityDuration: number = 0.5
) {
  const textAnimationTl = gsap.timeline();
  let split = SplitText.create(element, { type: "chars" });
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
  textAnimationTl.to(
    split.chars,
    {
      stagger: 0.05,
      opacity: 1,
      duration: opacityDuration,
      ease: "power2.out",
    },
    "0.20"
  );
}
