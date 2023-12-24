import { CustomSVGProps } from ".";

export function StopWatch({ width, height, color }: CustomSVGProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.5 14.167C22.5 15.5459 22.2284 16.9112 21.7007 18.1852C21.1731 19.4591 20.3996 20.6166 19.4246 21.5916C18.4496 22.5666 17.2921 23.3401 16.0182 23.8677C14.7443 24.3954 13.3789 24.667 12 24.667C10.6211 24.667 9.25574 24.3954 7.98182 23.8677C6.70791 23.3401 5.55039 22.5666 4.57538 21.5916C3.60036 20.6166 2.82694 19.4591 2.29926 18.1852C1.77159 16.9112 1.5 15.5459 1.5 14.167C1.5 11.3822 2.60625 8.7115 4.57538 6.74237C6.54451 4.77324 9.21523 3.66699 12 3.66699C14.7848 3.66699 17.4555 4.77324 19.4246 6.74237C21.3938 8.7115 22.5 11.3822 22.5 14.167Z"
        stroke={color}
        strokeWidth="1.5"
      />
      <path
        d="M12 14.1667V9.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.66663 1.3335H14.3333"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
