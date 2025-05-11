import { ReactElement } from "react";
import { ActionButton } from "./form";

export interface ModalMsg {
    typeMsg?: null | 'error' | 'info' | 'success' | 'warning' | 'spinner';
    msg?: null | string | ReactElement;
}

export interface Modal {
    modalFor: ModalFor | null;
    modalOpen: boolean;
    modalTitle?: string;
    typeMsg?: null | ModalTypeMessage;
    msg?: string;
    msgTitle?: string;
    modalActions: ActionButton[];
    hasCancelButton: boolean;
    onAccept?: null | (() => void)
}

export interface ModalPayload {
    modalFor: ModalFor;
    modalTitle?: string;
    typeMsg?: ModalTypeMessage;
    msg?: string;
    msgTitle?: string;
    modalActions?: ActionButton[];
    hasCancelButton?: boolean;
    onAccept?: null | (() => void)
}

export type ModalFor =
    | 'validate_code'
    | '2F_code'
    | 'new_product'
    | 'message'
    | 'loading'
    | 'edit_image_profile'
    | 'validate_new_email'
    | '2F_code_change'
    | 'verify_account'
    | 'new_variation_products'
    | 'audit_document'
    | 'audit_user'
    | 'category'
    | 'categoryInfo'
    | 'audit_product'
    | 'new_auction'
    | 'offers'
    | 'new_offer'
    | 'edit_auction'
    | 'new_user'
    | 'edit_user'
    | 'branch'
    | 'action'
    | 'point-of-sale';

export type ModalTypeMessage =
    | 'error'
    | 'info'
    | 'success'
    | 'warning'
    | 'spinner';

export interface ToastButton {
    text: string;
    action: (e: any) => void;
}

export interface Toast {
    id: string;
    title: string;
    description: string;
    type: 'info' | 'danger' | 'warning' | 'success' | 'secondary';
    duration?: number;
    timeless?: boolean;
    toastButton?: ToastButton;
}

export type Size = 'sm' | 'md' | 'lg'

export type TextVariant = 'helper' | 'base' | 'normal'