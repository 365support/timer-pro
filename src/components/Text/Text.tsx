import { ElementType, Ref, forwardRef } from "react";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { OverridableProps } from "@/types/OverridableProps";
import { CSSProperties } from "@vanilla-extract/css";

export type TextBaseProps = {
  display?: CSSProperties["display"];
  lineHeight?: CSSProperties["lineHeight"];
  weight?: CSSProperties["fontWeight"];
  size?: CSSProperties["fontSize"];
  color?: CSSProperties["color"];
  align?: CSSProperties["textAlign"];
  family?: CSSProperties["fontFamily"];
};

export type TextProps<T extends ElementType> = OverridableProps<
  T,
  TextBaseProps
>;

function Text<T extends ElementType = "span">(
  {
    as,
    display,
    color,
    lineHeight,
    weight,
    size,
    align,
    family,
    children,
    ...props
  }: TextProps<T>,
  ref: Ref<any>
) {
  const Component = as ?? "span";

  const dynamicStyles = assignInlineVars({
    display,
    color,
    lineHeight,
    fontWeight: weight,
    fontSize: size,
    textAlign: align,
    fontFamily: family,
  } as Record<string, string>);

  return (
    <Component ref={ref} role="text" style={dynamicStyles} {...props}>
      {children}
    </Component>
  );
}

export default forwardRef(Text) as typeof Text;
