import { theme } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const myStyle = style({
  display: "flex",
  gap: "12px",
  padding: "20px",
  flexDirection: "column",
});

export const textStyle = style({
  fontFamily: theme.font.number,
  fontWeight: "bold",
  display: "flex",
  paddingTop: "3px",
});

export const displayFlex = style({
  display: "flex",
  gap: "12px",
  alignItems: "center",
});

export const cardStyle = style({
  width: "168px",
  height: "108px",
  backgroundColor: "#574480",
  margin: "0",
  padding: "16px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

export const secondCardStyle = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "343px",
  height: "64px",
  backgroundColor: "#574480",
  margin: "0",
  padding: "0 16px 0 20px",
});

export const thirdCardStyle = style({
  display: "flex",
  gap: "12px",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#574480",
  width: "343px",
  height: "208px",
});
