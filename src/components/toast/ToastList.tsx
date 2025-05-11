import { useEffect, useRef } from "react";
import { AlertBordered } from "../alert/bordered/AlertBordered";
import { useToast } from "../../hooks/useToast";

// ----- Toast List Component -----
export const ToastList: React.FC = () => {
    const { toasts, removeToast } = useToast();
    const timers = useRef<Map<string, number>>(new Map());

    // Sync timers for removal on mount (similar logic)
    useEffect(() => {
        toasts.forEach((toast) => {
            if (!toast.timeless && !timers.current.has(toast.id)) {
                const timer = window.setTimeout(() => {
                    removeToast(toast.id);
                    timers.current.delete(toast.id);
                }, toast.duration || 3000);
                timers.current.set(toast.id, timer);
            }
        });
        return () => {
            timers.current.forEach(clearTimeout);
            timers.current.clear();
        };
    }, [toasts, removeToast]);

    const handleMouseEnter = (id: string) => {
        if (timers.current.has(id)) {
            clearTimeout(timers.current.get(id));
            timers.current.delete(id);
        }
    };

    const handleMouseLeave = (id: string, duration: number) => {
        if (!timers.current.has(id)) {
            const timer = window.setTimeout(() => {
                removeToast(id);
                timers.current.delete(id);
            }, duration);
            timers.current.set(id, timer);
        }
    };

    if (toasts.length === 0) return null;

    return (
        <div className="absolute bottom-4 right-4 z-50 flex flex-col-reverse gap-3">
            {toasts.map((toast) => (
                <div
                    key={toast.id}
                    className="animate-slide-right min-w-96 shadow-md"
                    onMouseEnter={() => handleMouseEnter(toast.id)}
                    onMouseLeave={() => {
                        if (!toast.timeless)
                            handleMouseLeave(toast.id, toast.duration || 3000);
                    }}
                >
                    <AlertBordered
                        title={toast.title}
                        description={toast.description}
                        className="max-w-96 p-4 shadow-lg"
                        type={toast.type}
                        showIcon
                        action={toast.toastButton?.action}
                        actionText={toast.toastButton?.text}
                        closeAction={() => removeToast(toast.id)}
                    />
                </div>
            ))}
        </div>
    );
};
