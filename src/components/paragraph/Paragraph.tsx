import clsx from 'clsx';
import { Size, TextVariant } from '../../types/ui';


interface ParagraphInterface extends React.HTMLAttributes<HTMLParagraphElement> {
    className?: string;
    size?: Size
    variant?: TextVariant
}

export const P = ( {children, className, size = 'md', variant = 'normal' }: ParagraphInterface) => {

    const sizeClass:Record<Size, string> = {
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-base'
    }

    const variants:Record<TextVariant, string> = {
        helper: 'text-gray-500 text-base',
        base: 'text-sm',
        normal: ''
    }

    return (
        <p className={clsx(variants[variant], sizeClass[size], className )}>
            {children}
        </p>
    );
};