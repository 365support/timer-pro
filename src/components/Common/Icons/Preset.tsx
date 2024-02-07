import { CustomSVGProps } from ".";

export function Preset({ width, height, color }: CustomSVGProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 28 28"
      fill="none"
    >
      <path
        d="M5.83337 24.5V5.83333C5.83337 5.21449 6.07921 4.621 6.51679 4.18342C6.95438 3.74583 7.54787 3.5 8.16671 3.5H19.8334C20.4522 3.5 21.0457 3.74583 21.4833 4.18342C21.9209 4.621 22.1667 5.21449 22.1667 5.83333V24.5L15.2624 20.0608C14.8859 19.8187 14.4477 19.6899 14 19.6899C13.5524 19.6899 13.1142 19.8187 12.7377 20.0608L5.83337 24.5Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
