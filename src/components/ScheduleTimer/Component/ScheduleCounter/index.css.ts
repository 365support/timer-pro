import { theme } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

const commonCardStyle = style({
  padding: "16px",
  width: "100%",

  height: "64px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const displayFlexStyle = style({
  display: "flex",
  gap: "8px",
  alignItems: "center",
});

export const workCardStyle = style([
  commonCardStyle,
  {
    backgroundColor: theme.color.primary40,
  },
]);

export const workIconStyle = style({
  padding: "3px",
  backgroundColor: "#463666",
});

export const cycleIconStyle = style({
  padding: "3px",
  backgroundColor: "#654672",
});

export const cycleCardStyle = style([
  commonCardStyle,
  {
    backgroundColor: theme.color.primary30,
  },
]);

export const cardContainerStyle = style({
  display: "flex",
  gap: "6px",
  width: "100%",
  alignItems: "center",
});
