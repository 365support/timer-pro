import { style } from "@vanilla-extract/css";

export const panelContainerStyle = style({
  display: "flex",
  width: "100%",
  alignItems: "center",
  justifyContent: "space-around",
});

export const centerIconStyle = style({
  width: "80px",
  height: "80px",
  backgroundColor: "black",
  filter: "drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.08))",
});

export const playIconStyle = style([centerIconStyle, { paddingLeft: "8px" }]);

export const sideIconStyle = style({
  display: "flex",
  width: "48px",
  height: "48px",
  backgroundColor: "black",
  filter: "drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.08))",
});
