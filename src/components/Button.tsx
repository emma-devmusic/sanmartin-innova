import React from 'react';

export interface ButtonProps {
    /** Content inside the button */
    children: React.ReactNode;
    /** Optional URL, renders <a> if provided (unless disabled) */
    href?: string;
    /** Click handler */
    onClick?: (e?: any) => void;
    /** Tailwind classes to extend styling */
    className?: string;
    /** Color variant */
    variant?:
        | 'primary'
        | 'secondary'
        | 'success'
        | 'danger'
        | 'warning'
        | 'info'
        | 'disabled';
    type?: 'submit' | 'reset' | 'button';
    borderClass?: string;
    disabled?: boolean;
    bgClass?: string;
}

const variantStyles: Record<
    NonNullable<ButtonProps['variant']>,
    { inner: string; text: string }
> = {
    primary: {
        inner: 'bg-orange',
        text: 'text-white border-gray-800',
    },
    secondary: {
        inner: 'bg-gray-300',
        text: 'text-gray-800 border-gray-800',
    },
    success: {
        inner: 'bg-green-600',
        text: 'text-white border-gray-800',
    },
    danger: {
        inner: 'bg-red-600',
        text: 'text-white border-gray-800',
    },
    warning: {
        inner: 'bg-yellow-500',
        text: 'text-black border-gray-800',
    },
    info: {
        inner: 'bg-teal-500',
        text: 'text-white border-gray-800',
    },
    disabled: {
        inner: 'bg-gray-400',
        text: 'text-white border-gray-800',
    },
};

/**
 * A reusable button component with a layered hover effect and color variants.
 * Renders as <a> when `href` is passed (unless disabled), otherwise as <button>.
 */
export const Button: React.FC<ButtonProps> = ({
    children,
    href,
    onClick,
    className = '',
    borderClass = '',
    bgClass = '',
    variant = 'primary',
    type = 'button',
    disabled = false
}) => {
    const isDisabled = variant === 'disabled';
    const baseClasses = [
        'group relative inline-block focus:ring-3 focus:outline-none',
        isDisabled && 'pointer-events-none opacity-50',
    ]
        .filter(Boolean)
        .join(' ');

    const { inner, text } = variantStyles[variant];
    const innerClasses = `absolute inset-0 translate-x-1.5 translate-y-1.5 transition-transform ${inner} !rounded-md ${bgClass} ${
        isDisabled ? '' : 'group-hover:translate-x-0 group-hover:translate-y-0'
    }`;
    const textClasses = `relative inline-block border-2 px-8 py-3 text-sm font-bold uppercase tracking-widest w-full ${text}`;

    if (href && !isDisabled) {
        return (
            <a
                href={href}
                onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
                className={`${baseClasses} ${className} hover:cursor-pointer`}
            >
                <span className={innerClasses} />
                <span className={textClasses}>{children}</span>
            </a>
        );
    }

    return (
        <button
            type={type}
            onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
            disabled={isDisabled || disabled}
            className={`${baseClasses} ${className} hover:cursor-pointer`}
        >
            <div className={innerClasses} />
            <div className={textClasses + ' ' + borderClass}>{children}</div>
        </button>
    );
};
