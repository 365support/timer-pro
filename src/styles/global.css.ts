import { globalFontFace, globalStyle } from "@vanilla-extract/css";

globalStyle("*", {
  margin: 0,
  padding: 0,
  boxSizing: "border-box",
});

const pretendard = "Pretendard";

globalFontFace(pretendard, {
  src: [
    `url("/fonts/Pretendard-Regular.woff") format("woff")`,
    `url("/fonts/Pretendard-Regular.woff2") format("woff2")`,
    `local("Pretendard-Regular")`,
  ],
  fontStyle: "normal",
  fontWeight: "400",
  fontDisplay: "swap",
});

globalStyle("html, body", {
  height: "100%",
  fontFamily: pretendard,
});
