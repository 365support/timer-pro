import { CSSProperties, ElementType, Ref, forwardRef } from "react";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { OverridableProps } from "@/types/OverridableProps";
import * as styles from "./Text.css";

export type TextBaseProps = {
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
    color = "black",
    lineHeight = "normal",
    weight = "normal",
    size = "16px",
    align = "left",
    family = "sans-serif",
    children,
    ...props
  }: TextProps<T>,
  ref: Ref<any>
) {
  const Component = as ?? "span";

  const dynamicStyles = assignInlineVars({
    [styles.color]: color,
    [styles.lineHeight]: `${lineHeight}`,
    [styles.weight]: `${weight}`,
    [styles.size]: `${size}`,
    [styles.align]: align,
    [styles.family]: family,
  });

  return (
    <Component
      className={styles.container}
      ref={ref}
      role="text"
      style={dynamicStyles}
      {...props}
    >
      {children}
    </Component>
  );
}

export default forwardRef(Text) as typeof Text;
