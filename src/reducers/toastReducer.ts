import { ToastAction, ToastContextState } from "../types/toast";

export const toastReducer = (
    state: ToastContextState,
    action: ToastAction
): ToastContextState => {
    switch (action.type) {
        case 'ADD_TOAST':
            return { toasts: [...state.toasts, action.payload] };
        case 'REMOVE_TOAST':
            return {
                toasts: state.toasts.filter((t) => t.id !== action.payload.id),
            };
        default:
            return state;
    }
};