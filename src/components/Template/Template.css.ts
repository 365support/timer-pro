import { Rubik } from "@/styles/font.css";
import { theme } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  gap: "10px",
  flexDirection: "column",
});

export const innerContainer = style({
  display: "flex",
  gap: "10px",
});

export const displayFlex = style({
  display: "flex",
  gap: "12px",
  alignItems: "center",
});

export const test = style({
  display: "flex",
  justifyContent: "center",

  alignItems: "end",
  fontFamily: Rubik,
});

export const templateContainer = style({
  position: "relative",
  width: "100%",
});

export const cardContainer = style({
  width: "100%",
  padding: "10% 2% 0 2%",
  display: "flex",
  flexDirection: "column",
  gap: "6px",
});

export const totalTimeCard = style({
  width: "100%",
  backgroundColor: "#08040C",

  backdropFilter: "blur(12px)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  padding: "40px 0 20px 0",

  position: "relative",
});

export const totalIcon = style({
  width: "56px",
  height: "56px",
  display: "flex",
  justifyContent: "space-around",
  paddingLeft: "4px",
  backgroundColor: "#5B4C64",
});

export const totalIconShadow = style({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "180px",
  height: "180px",
  borderRadius: "50%",
  backgroundColor: "#2C1C35",
  filter: "blur(30px)",
  zIndex: -1,
});

const commonCard = style({
  padding: "16px",
  width: "100%",

  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
});

export const workCard = style([
  commonCard,
  {
    backgroundColor: theme.color.primary40,
    height: "108px",
  },
]);

export const workIcon = style({
  padding: "3px",
  backgroundColor: "#463666",
});

export const restCard = style([
  commonCard,
  {
    backgroundColor: theme.color.primary60,
    height: "108px",
  },
]);

export const restIcon = style({
  padding: "6px",
  backgroundColor: "#29242D",
});

export const roundCard = style([
  commonCard,
  {
    display: "flex",
    flexDirection: "row",

    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: theme.color.primary30,
    height: "64px",
  },
]);

export const roundIcon = style({
  padding: "3px",
  backgroundColor: "#654672",
});

export const cycleCard = style([
  commonCard,
  {
    backgroundColor: theme.color.primary30,
    height: "108px",
  },
]);

export const cycleRestCard = style([
  commonCard,
  {
    backgroundColor: theme.color.primary50,
    height: "108px",
  },
]);

export const cycleRestIcon = style({
  padding: "3px",
  backgroundColor: "#5A1A72",
});

export const flexCard = style({
  display: "flex",
  width: "100%",
  gap: "6px",
});
