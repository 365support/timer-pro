import React, { Ref, forwardRef } from "react";
import Text, { TextBaseProps } from "./Text";
import { Combine } from "@/types/utils";
import { TypoScale, TypoType, theme } from "@/styles/theme.css";

type CustomTextBaseProps = {
  as?: TypoType;
  size?: TypoScale;
  children: React.ReactNode;
};

export type CustomTextProps = Combine<CustomTextBaseProps, TextBaseProps>;

function CustomText(
  {
    as = "body",
    size = "md",
    color = "black",
    lineHeight = "1.5",
    weight = "normal",
    align = "left",
    family = "sans-serif",
    children,
    ...props
  }: CustomTextProps,
  ref: Ref<any>
) {
  const fontSize = theme.fontSize[as][size];
  const Component = as === "title" ? "span" : "p";

  return (
    <Text
      as={Component}
      color={color}
      lineHeight={lineHeight}
      size={fontSize}
      weight={weight}
      align={align}
      family={family}
      ref={ref}
      {...props}
    >
      {children}
    </Text>
  );
}

export default forwardRef(CustomText);
