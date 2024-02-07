import { CustomSVGProps } from ".";

export function Hourglass({ width, height, color }: CustomSVGProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 28 28"
      fill="none"
    >
      <path
        d="M5.83337 25.6668H22.1667M5.83337 2.3335H22.1667M19.8334 25.6668V20.7995C19.8332 20.1807 19.5873 19.5873 19.1497 19.1498L14 14.0002M14 14.0002L8.85037 19.1498C8.41276 19.5873 8.16684 20.1807 8.16671 20.7995V25.6668M14 14.0002L8.85037 8.8505C8.41276 8.41301 8.16684 7.81962 8.16671 7.20083V2.3335M14 14.0002L19.1497 8.8505C19.5873 8.41301 19.8332 7.81962 19.8334 7.20083V2.3335"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
