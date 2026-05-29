export const LINKS = {
  github: "https://github.com/natebwangsut",
  linkedin: "https://linkedin.com/in/natebwangsut/",
  twitter: "https://x.com/natebwangsut",
};

import type { DOMSegmentWithTransition } from "motion";

export const loaderAnimation: DOMSegmentWithTransition = [
  ".loader",
  { opacity: [1, 0], pointerEvents: "none" },
  { ease: "easeOut" },
];
