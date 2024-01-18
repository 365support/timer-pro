import { createGlobalTheme } from "@vanilla-extract/css";
import { Pretendard, Rubik } from "./font.css";

export type TypoType = "title" | "body" | "caption";
export type TypoScale = "xxs" | "xs" | "sm" | "md" | "lg" | "xlg";

export type FontSize = {
  [key in TypoType]: Partial<{
    [sizeKey in TypoScale]: string;
  }>;
};

export const fontSize: FontSize = {
  title: {
    xs: "18px",
    sm: "20px",
    md: "24px",
    lg: "48px",
    xlg: "64px",
  },
  body: {
    sm: "12px",
    md: "14px",
    lg: "16px",
  },
  caption: {
    sm: "10px",
    md: "11px",
  },
};

export const theme = createGlobalTheme(":root", {
  color: {
    primary10: "#DAA0F2",
    primary20: "#AC7EBF",
    primary30: "#7E588F",
    primary40: "#574480",
    primary50: "#6C208C",
    primary60: "#332D38",
    primary70: "#14081E",

    White100: "#fff",

    gray010: "#f4f4f4",
    gray020: "#e0e0e0",
    gray030: "#c6c6c6",
    gray040: "#adadad",
    gray050: "#878787",
    gray060: "#676767",
    gray070: "#414141",
    gray080: "#282828",
    gray090: "#1b1b1b",
    gray100: "#000000",
  },
  font: {
    korean: Pretendard,
    number: Rubik,
  },
  fontSize,
});
