import { theme } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const containerStyle = style({
  position: "absolute",
  width: "100%",
  maxWidth: "600px",
  height: "100vh",
  top: 0,
  left: 0,
  zIndex: 100,
  backgroundColor: theme.color.primary70,
});
