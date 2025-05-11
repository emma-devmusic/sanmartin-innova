import { ReactNode } from "react";
import { Toast } from "./ui";

// ----- Types -----
export interface ToastContextState {
    toasts: Toast[];
}

export type ToastAction =
    | { type: 'ADD_TOAST'; payload: Toast }
    | { type: 'REMOVE_TOAST'; payload: { id: string } };

export interface ToastContextProps {
    toasts: Toast[];
    addToast: (toast: Omit<Toast, 'id'>) => void;
    removeToast: (id: string) => void;
}


export interface ToastProviderProps {
    children: ReactNode;
}