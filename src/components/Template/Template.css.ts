import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  gap: "10px",
  flexDirection: "column",
});

export const innerContainer = style({
  display: "flex",
  gap: "10px",
});
