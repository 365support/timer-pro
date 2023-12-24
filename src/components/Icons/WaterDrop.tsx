import { CustomSVGProps } from ".";

export function WaterDrop({ width, height, color }: CustomSVGProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M18.75 15.0001C18.75 19.1424 16.1423 21.7501 12 21.7501C7.85766 21.7501 5.25 19.1424 5.25 15.0001C5.25 10.5549 10.0889 4.55401 11.573 2.81823C11.6258 2.75656 11.6913 2.70705 11.7651 2.6731C11.8388 2.63916 11.919 2.62158 12.0002 2.62158C12.0814 2.62158 12.1617 2.63916 12.2354 2.6731C12.3092 2.70705 12.3747 2.75656 12.4275 2.81823C13.9111 4.55401 18.75 10.5549 18.75 15.0001Z"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M16.125 15.375C16.125 16.2701 15.7694 17.1285 15.1365 17.7615C14.5035 18.3944 13.6451 18.75 12.75 18.75"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
