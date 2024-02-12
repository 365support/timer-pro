import { style } from "@vanilla-extract/css";

export const progressContainerStyle = style({
  position: "relative",
  width: "90%",
});

export const innerContentStyle = style({
  position: "absolute",
  top: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
