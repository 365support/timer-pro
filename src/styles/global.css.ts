import { globalFontFace, globalStyle } from "@vanilla-extract/css";

globalStyle("*", {
  margin: 0,
  padding: 0,
  boxSizing: "border-box",
});

const pretendard = "Pretendard";

globalFontFace(pretendard, {
  src: `url("/fonts/Pretendard-Regular.otf")`,
  fontWeight: "normal",
});

globalStyle("html, body", {
  height: "100%",
  fontFamily: pretendard,
});
