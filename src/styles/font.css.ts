import { fontFace } from "@vanilla-extract/css";

export const Pretendard = fontFace([
  {
    src: [
      `url("/fonts/Pretendard-Regular.woff") format("woff")`,
      // `url("/fonts/Pretendard-Regular.woff2") format("woff2")`,
      // `local("Pretendard-Regular")`,
    ],
    fontStyle: "normal",
    fontWeight: "400",
    fontDisplay: "swap",
  },
  {
    src: [
      `url("/fonts/Pretendard-Medium.woff") format("woff")`,
      // `url("/fonts/Pretendard-Medium.woff2") format("woff2")`,
      // `local("Pretendard-Medium")`,
    ],
    fontStyle: "normal",
    fontWeight: "700",
    fontDisplay: "swap",
  },
]);

export const Rubik = fontFace([
  {
    src: [
      `url("/fonts/Rubik-Regular.woff") format("woff")`,
      // `url("/fonts/Rubik-Regular.woff2") format("woff2")`,
      // `local("Rubik-Regular")`,
    ],
    fontStyle: "normal",
    fontWeight: "400",
    fontDisplay: "swap",
  },
  {
    src: [
      `url("/fonts/Rubik-Medium.woff") format("woff")`,
      // `url("/fonts/Pretendard-Medium.woff2") format("woff2")`,
      // `local("Pretendard-Medium")`,
    ],
    fontStyle: "normal",
    fontWeight: "700",
    fontDisplay: "swap",
  },
]);
