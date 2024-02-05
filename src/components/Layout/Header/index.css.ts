import { style } from "@vanilla-extract/css";

export const headerStyle = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 16px",
  height: "50px",
});

export const headerUnderLine = style({
  width: "100%",
  borderBottom: "1px solid #210F31",
});

export const headerSide = style({
  display: "flex",
  alignItems: "center",
  gap: "16px",
});

export const headerCenter = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flex: 1,
});
