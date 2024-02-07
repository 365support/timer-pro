import { style } from "@vanilla-extract/css";

export const navContainer = style({
  backgroundColor: "black",
  display: "flex",
  justifyContent: "space-around",
  width: "100%",
  height: "55px",
  borderRadius: "15px 15px 0 0",
});

export const iconBox = style({
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: "4px",
});

export const centerIconWrapper = style({
  marginTop: "-8px",
  width: "fit-content",
  height: "fit-content",
});

export const centerIconBox = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  width: "48px",
  height: "48px",
  borderRadius: "50%",

  background: "linear-gradient(135deg, #9A7EE1 17.71%, #E8A6FF 80.21%)",
  filter: "drop-shadow(0px 4px 20px rgba(232, 166, 255, 0.12))",
});

export const navItem = style({
  backgroundColor: "transparent",
  border: "none",
  padding: 0,
  cursor: "pointer",
});
