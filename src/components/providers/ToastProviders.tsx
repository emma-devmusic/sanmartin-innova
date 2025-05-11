import { createContext, useEffect, useReducer, useRef } from "react";
import { toastReducer } from "../../reducers/toastReducer";
import { ToastContextProps, ToastProviderProps } from "../../types/toast";
import { Toast } from "../../types/ui";


// ----- Context -----
export const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export const ToastProvider = ({ children }: ToastProviderProps) => {
    const [state, dispatch] = useReducer(toastReducer, { toasts: [] });
    const timers = useRef<Map<string, number>>(new Map());

    // Auto-remove timers
    useEffect(() => {
        state.toasts.forEach((toast) => {
            if (!toast.timeless && !timers.current.has(toast.id)) {
                const timerId = window.setTimeout(() => {
                    dispatch({
                        type: 'REMOVE_TOAST',
                        payload: { id: toast.id },
                    });
                    timers.current.delete(toast.id);
                }, toast.duration || 3000);
                timers.current.set(toast.id, timerId);
            }
        });

        return () => {
            timers.current.forEach(clearTimeout);
            timers.current.clear();
        };
    }, [state.toasts]);

    // Actions
    const addToast = (toast: Omit<Toast, 'id'>) => {
        const id = String(Date.now());
        dispatch({ type: 'ADD_TOAST', payload: { ...toast, id } });
    };

    const removeToast = (id: string) => {
        if (timers.current.has(id)) {
            clearTimeout(timers.current.get(id));
            timers.current.delete(id);
        }
        dispatch({ type: 'REMOVE_TOAST', payload: { id } });
    };

    return (
        <ToastContext.Provider
            value={{ toasts: state.toasts, addToast, removeToast }}
        >
            {children}
        </ToastContext.Provider>
    );
};
