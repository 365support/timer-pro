import { style } from "@vanilla-extract/css";

export const circleButtonStyle = style({
  cursor: "pointer",
  border: "none",
  outline: "none",

  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
