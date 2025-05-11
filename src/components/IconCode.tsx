import React from 'react';

export interface IconCodeProps extends React.SVGProps<SVGSVGElement> {
    /** Width and height (e.g. 24 or '1em') */
    size?: number | string;
    /** Fill color, default currentColor */
    color?: string;
    /** Enable infinite spin animation */
    spin?: boolean;
    /** Duration of one full rotation in seconds */
    spinDuration?: number;
    /** CSS transform-origin (e.g. 'center', 'top left') */
    pivot?: string;
}

/**
 * Reusable Code Icon with optional infinite rotation.
 */
export const IconCode: React.FC<IconCodeProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    spin = false,
    spinDuration = 2,
    pivot = 'center',
    style,
    ...props
}) => {
    // Compute inline style for spinning
    const spinStyle = spin
        ? {
              animation: `spin ${spinDuration}s linear infinite`,
              transformOrigin: pivot,
          }
        : {};

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={color}
            className={className}
            style={{ ...style, ...spinStyle }}
            {...props}
        >
            <path d="M8.64 5.23a1 1 0 0 0-1.41.13l-5 6a1 1 0 0 0 0 1.27l4.83 6a1 1 0 0 0 .78.37a1 1 0 0 0 .78-1.63L4.29 12l4.48-5.36a1 1 0 0 0-.13-1.41m13.14 6.14l-4.78-6a1 1 0 0 0-1.41-.15a1 1 0 0 0-.15 1.41L19.71 12l-4.48 5.37a1 1 0 0 0 .13 1.41A1 1 0 0 0 16 19a1 1 0 0 0 .77-.36l5-6a1 1 0 0 0 .01-1.27" />
        </svg>
    );
};

/**
 * Add keyframes for spin if not defined globally
 */
const styleEl = document.createElement('style');
styleEl.textContent = `
@keyframes spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
`;
document.head.appendChild(styleEl);
