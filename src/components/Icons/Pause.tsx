import { CustomSVGProps } from ".";

export function Pause({ width, height, color }: CustomSVGProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 14 24"
      fill="none"
    >
      <rect width="3" height="24" fill={color} />
      <rect x="11" width="3" height="24" fill={color} />
    </svg>
  );
}
