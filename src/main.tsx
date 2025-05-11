import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { ToastProvider } from './components/providers/ToastProviders';
import { ToastList } from './components/toast/ToastList';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ToastProvider>
            <App />
            <ToastList />
        </ToastProvider>
    </StrictMode>
);
