import { CustomSVGProps } from ".";

export function Cycle({ width, height, color }: CustomSVGProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M7.00001 19H4.81501C4.49958 19.0009 4.18927 18.9203 3.91418 18.7659C3.6391 18.6116 3.40859 18.3887 3.24501 18.119C3.08792 17.8481 3.00486 17.5407 3.00415 17.2275C3.00345 16.9144 3.08514 16.6066 3.24101 16.335L7.19601 9.5M11 19H19.203C19.5169 18.9976 19.8249 18.9144 20.0974 18.7586C20.3699 18.6027 20.5978 18.3794 20.759 18.11C20.9139 17.8399 20.9954 17.5339 20.9954 17.2225C20.9954 16.9111 20.9139 16.6051 20.759 16.335L19.533 14.215"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 16L11 19L14 22M8.29298 13.596L7.19598 9.5L3.09998 10.598M9.34398 5.811L10.437 3.919C10.5939 3.6454 10.8189 3.41701 11.0902 3.25599C11.3614 3.09497 11.6696 3.00679 11.985 3C12.2979 2.99942 12.6055 3.08116 12.8769 3.23703C13.1482 3.39289 13.3738 3.6174 13.531 3.888L17.474 10.731"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3781 9.63277L17.4741 10.7308L18.5711 6.63477"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
