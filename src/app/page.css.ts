import { theme } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const myStyle = style({
  display: "flex",
  paddingTop: "3px",
});

export const textStyle = style({
  fontFamily: theme.font.number,
  fontWeight: "bold",
  display: "flex",
  paddingTop: "3px",
});
