import { style } from "@vanilla-extract/css";

export const mainContainerStyle = style({
  display: "flex",
  gap: "16px",
  alignItems: "center",
});

export const workIconStyle = style({
  display: "flex",
  alignItems: "center",
  borderRadius: "50%",

  padding: "3px",
  backgroundColor: "#38334D",
});
