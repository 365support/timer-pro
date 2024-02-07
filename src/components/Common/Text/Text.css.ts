import { createVar, style } from "@vanilla-extract/css";

export const color = createVar();
export const lineHeight = createVar();
export const weight = createVar();
export const size = createVar();
export const align = createVar();
export const family = createVar();

export const containerStyle = style({
  color,
  lineHeight,
  fontWeight: weight,
  fontSize: size,
  textAlign: align,
  fontFamily: family,
});
