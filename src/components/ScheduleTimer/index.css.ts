import { breakPoint } from "@/styles/breakPoint";
import { style } from "@vanilla-extract/css";

export const mainContainer = style({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
});

export const innerContainer = style({
  width: "100%",
  height: "100%",

  display: "flex",
  flexDirection: "column",

  justifyContent: "space-between",
  alignItems: "center",
  gap: "4%",

  padding: "2% 2%",

  "@media": {
    [`screen and (min-height: ${breakPoint.smallPhone.height})`]: {
      padding: "5% 2%",
    },
    [`screen and (min-height: ${breakPoint.bigPhone.height})`]: {
      padding: "8% 2%",
    },
  },
});

export const displayFlex = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "10px",
});

export const progressStyle = style({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "5%",
});
