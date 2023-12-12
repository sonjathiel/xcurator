import * as React from 'react';

interface ChevronDownIconProps extends React.SVGProps<SVGSVGElement> {
  width?: string;
  height?: string;
  color?: string;
}

const ChevronDownIcon: React.FC<ChevronDownIconProps> = ({
  width = '16px',
  height = '16px',
  color = 'currentColor',
  ...props
}: ChevronDownIconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" />
  </svg>
);

export { ChevronDownIcon };
