import React from 'react';

export interface IconSquareProps extends React.SVGProps<SVGSVGElement> {
    /** Width and height of the icon (number or string, e.g. 24 or '1em') */
    size?: number | string;
    /** Color to fill the icon, defaults to currentColor */
    color?: string;
}

/**
 * Reusable Square Icon component.
 * Accepts standard SVG props plus `size` and `color`.
 */
export const IconSquare: React.FC<IconSquareProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    ...props
}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={color}
        className={className}
        {...props}
    >
        <path d="M5.616 20q-.672 0-1.144-.472T4 18.385V5.615q0-.67.472-1.143Q4.944 4 5.616 4h12.769q.67 0 1.143.472q.472.472.472 1.144v12.769q0 .67-.472 1.143q-.472.472-1.143.472zm0-1h12.769q.269 0 .442-.173t.173-.442V5.615q0-.269-.173-.442T18.385 5H5.615q-.269 0-.442.173T5 5.616v12.769q0 .269.173.442t.443.173M5 19V5z" />
    </svg>
);
