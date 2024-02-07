import { style } from "@vanilla-extract/css";

export const headerStyle = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 16px",
  height: "50px",
});

const baseHeaderItem = style({
  backgroundColor: "transparent",
  border: "none",
  padding: 0,
  cursor: "pointer",
});

export const headerUnderLine = style([
  baseHeaderItem,
  {
    width: "100%",
    borderBottom: "1px solid #210F31",
  },
]);

export const headerSide = style([
  baseHeaderItem,
  {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },
]);

export const headerCenter = style([
  baseHeaderItem,
  {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
]);
