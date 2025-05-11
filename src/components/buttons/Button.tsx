import { ChevronDown } from "lucide-react";
import { Size } from "../../types/ui";

export interface ButtonProps {
    label: string;
    action?: (e: any) => void;
    type?: 'button' | 'submit';
    className?: string; // Optional prop to add additional styles to the button. Example: className="my-class"  // Optional prop to add additional styles to the button. Example: className="my-class"  // Optional prop to add additional styles to the button. Example: className="my-class"  // Optional prop to add additional styles to the button. Example: className="my-class"  // Optional prop to add additional styles to the button. Example: className="
    variant?: 'primary' | 'secondary' | 'danger' | 'primary-outline' | 'danger-outline' | 'secondary-outline' | 'plain' | 'plain-primary' | 'plain-danger';
    disabled?: boolean; // Optional prop to disable the button. Example: disabled={true}  // Optional prop to disable the button. Example: disabled={true}  // Optional prop to disable the button. Example: disabled={true}  // Optional prop to disable the button. Example: disabled={true}  // Optional prop to disable the button. Example: disabled={true}  // Optional prop to disable the button. Example: disabled={true}  // Optional prop to disable
    icon?: React.ReactNode; // Optional prop to add an icon to the button. Example: icon={<Icon />}  // Optional prop to add an icon to the button. Example: icon={<Icon />}  // Optional prop to add an icon to the button. Example: icon={<Icon />}  // Optional prop to add an icon to the button. Example: icon={<Icon />}  // Optional prop to add an icon to the button. Example: icon={<Icon />}  // Optional
    iconPosition?: 'left' | 'right';
    withChevron?: boolean;
    size?: Size
    title?: string;
}

type ButtonVariants = {
    primary: string;
    secondary: string;
    danger: string;
    ['primary-outline']: string;
    ['secondary-outline']: string;
    ['danger-outline']: string;
    plain: string;
    ['plain-primary']: string;
    ['plain-danger']: string;
}

export const Button = ({ label, action, className, type, variant = 'primary', disabled, icon, iconPosition = 'left', withChevron = false, size = 'md', title }: ButtonProps) => {

    const buttonVariants: ButtonVariants = {
        primary: 'border-primary bg-primary text-white hover:bg-primary-hover active:text-primary active:!text-gray-100',
        secondary: 'bg-white text-primary',
        danger: 'border-danger bg-danger text-white hover:bg-danger-hover hover:border-danger-hover active:bg-red-700',
        plain: 'bg-transparent border-transparent hover:bg-gray-100 !p-1 focus:!ring-0 focus:outline-none',
        ['plain-primary']: '!text-primary bg-transparent border-transparent hover:!text-primary-hover !p-1 focus:!ring-0 focus:outline-none',
        ['plain-danger']: 'text-danger bg-transparent border-transparent hover:!text-danger-hover !p-1 focus:!ring-0 focus:outline-none',
        ['primary-outline']: 'border-primary text-primary hover:text-white hover:bg-primary-hover',
        ['secondary-outline']: 'bg-transparent border-gray-600 !text-gray-600 hover:border-gray-700 hover:text-gray-700',
        ['danger-outline']: 'border-red-500 text-red-500 hover:bg-red-600 hover:text-white hover:border-red-600',
    }

    const sizeClass:Record<Size, string> = {
        sm: 'py-[6px] px-[8px] text-xs',
        md: 'py-2 px-2.5 text-sm',
        lg: 'py-2.5 px-2.5 text-lg'
    }

    return (
        <button
            type={type || 'button'}
            className={`shrink-0 rounded border px-4.5 py-2.5 text-sm font-medium transition-all hover:cursor-pointer ${sizeClass[size]} ${buttonVariants[variant]} focus:ring-1 ${className} active:translate-y-[1px] disabled:bg-gray-100 disabled:border-gray-400 disabled:text-gray-400 disabled:active:translate-y-[0px] flex items-center justify-center gap-1`}
            onClick={action}
            disabled={disabled}
            title={title}
        >
            <div className={`flex items-center gap-1 ${iconPosition === 'right' && withChevron ? 'flex-row-reverse justify-end w-full' : iconPosition === "right" ? "flex-row-reverse justify-end" : withChevron && "w-full"}`}>
                {
                    icon &&
                    <div>
                        {icon}
                    </div>
                }
                {
                    label &&
                    <span className={`flex items-center`}>
                        {label}
                    </span>
                }
            </div>
            {withChevron && <ChevronDown />}
        </button>
    );
};
