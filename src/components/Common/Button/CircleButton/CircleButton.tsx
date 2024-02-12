import { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import { circleButtonStyle } from "./CircleButton.css";

type CircleButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

const CircleButton = ({
  className,
  disabled,
  onClick,
  children,
}: CircleButtonProps) => {
  return (
    <button
      className={clsx(circleButtonStyle, className)}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CircleButton;
