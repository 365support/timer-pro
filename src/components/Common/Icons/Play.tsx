import { CustomSVGProps } from ".";

export function Play({ width, height, color }: CustomSVGProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 18 26"
      fill="none"
    >
      <path
        d="M18 13L6.8385e-07 25.9904L1.81951e-06 0.00961797L18 13Z"
        fill={color}
      />
    </svg>
  );
}
