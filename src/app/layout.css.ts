import { style } from "@vanilla-extract/css";
import { theme } from "@/styles/theme.css";

export const body = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  width: "100%",
  height: "100%",
});

export const main = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  width: "100%",
  height: "100%",
  maxWidth: "600px",

  backgroundColor: theme.color.primary70,
  color: theme.color.White100,
});

export const footer = style({
  width: "100%",
  maxWidth: "600px",
  backgroundColor: theme.color.primary70,
  color: theme.color.White100,
});
