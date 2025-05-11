import {
    useContext,
} from 'react';
import { ToastContextProps } from '../types/toast';
import { ToastContext } from '../components/providers/ToastProviders';



// ----- Hook -----
export const useToast = (): ToastContextProps => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
};

