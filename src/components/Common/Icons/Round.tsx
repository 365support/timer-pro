import { CustomSVGProps } from ".";

export function Round({ width, height, color }: CustomSVGProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.9999 3.5C16.4768 3.50004 18.874 4.3757 20.7677 5.97222C22.6614 7.56874 23.9298 9.78332 24.3486 12.2246C24.7674 14.6658 24.3097 17.1765 23.0564 19.3129C21.8031 21.4493 19.8349 23.0739 17.4997 23.8995C15.1644 24.7251 12.6125 24.6986 10.2949 23.8247C7.97733 22.9507 6.04331 21.2856 4.83468 19.1236C3.62606 16.9616 3.22064 14.4419 3.69009 12.0099C4.15954 9.57791 5.47364 7.39016 7.40011 5.83333"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 5.25H8.16667V9.91667"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
