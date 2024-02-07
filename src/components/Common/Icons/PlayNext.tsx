import { CustomSVGProps } from ".";

export function PlayNext({ width, height, color }: CustomSVGProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 14 14"
      fill="none"
    >
      <path d="M12 7L3 13.0622L3 0.937822L12 7Z" fill={color} />
      <rect x="12" y="1" width="2" height="12" fill={color} />
    </svg>
  );
}
