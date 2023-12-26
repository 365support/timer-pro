import React, { Ref, forwardRef } from "react";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import Text, { TextBaseProps } from "./Text";
import { Combine } from "@/types/utils";
import { TypoScale, TypoType, theme } from "@/styles/theme.css";

type CustomTextBaseProps = {
  as: TypoType;
  size: TypoScale;
  children: React.ReactNode;
};

export type CustomTextProps = Combine<CustomTextBaseProps, TextBaseProps>;

function CustomText(
  {
    as,
    size,
    display,
    color,
    lineHeight,
    weight,
    align,
    family,
    children,
    ...props
  }: CustomTextProps,
  ref: Ref<any>
) {
  const fontSizeValue = theme.fontSize[as][size];

  const dynamicStyles = assignInlineVars({
    display,
    color,
    lineHeight,
    fontWeight: weight,
    fontSize: fontSizeValue,
    textAlign: align,
    fontFamily: family,
  } as Record<string, string>);

  const Component = as === "title" ? "span" : "p";

  return (
    <Text as={Component} {...props} style={dynamicStyles} ref={ref}>
      {children}
    </Text>
  );
}

export default forwardRef(CustomText);
