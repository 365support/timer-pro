import { createVar, style } from "@vanilla-extract/css";

export const width = createVar();

export const timeContainerStyle = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const numberStyle = style({
  width: width,
  display: "flex",
  justifyContent: "center",
  textAlign: "center",
});
