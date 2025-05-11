import { ButtonProps } from "../components/buttons/Button";

export interface FormsInputs {
    name?: string,
    last_name?: string,
    fname?: string,
    email?: string,
    password?: string,
    password2?: string,
    dni?: string,
    cell_phone?: string,
    cell_phone_secondary?: string,
    address?: string,
    age?: string,
    gender_type?: string | number,
    role_id?: string | number,
    two_factor_enabled?: boolean,
    cuil?: string;
    cuit?: string;
    name_bussines?: string;
    phone_bussines?: string;
    address_bussines?: string;
    description?: string
    type?: string;
    url?: string;
    auth_gender_type?: number;
    phone?: string;
    product_title?: string;
    product_variation_title?: string,
    category?: number,
    price?: number,
    quantity?: number,
    sub_category?: number,
    user_active?: boolean
}

export interface ObjectErrorsMessages extends Record<keyof FormsInputs, string> {
    hasErrors?: boolean;
}

export type FieldsFormUser =
    | 'name'
    | 'last_name'
    | 'last_name'
    | 'fname'
    | 'email'
    | 'password'
    | 'password2'
    | 'dni'
    | 'cell_phone'
    | 'cell_phone_secondary'
    | 'address'
    | 'floor'
    | 'dni'
    | 'age'
    | 'enable'
    | 'auth_gender_type'
    | 'role_id'
    | 'two_factor_enabled'
    | 'role_id'
    | 'cuil'
    | 'cuit'
    | 'name_bussines'
    | 'phone_bussines'
    | 'address_bussines'
    | 'description'
    | 'type'
    | 'url'
    | 'auth_gender_type'
    | 'phone'

export interface FormNewPassword {
    old_password: string;
    new_password: string;
    new_password_2: string;
}

export interface ObjectPasswordChecks {
    pass_length: boolean;
    pass_uppercase: boolean;
    pass_lowercase: boolean;
    pass_specialCaracter: boolean;
    pass_number: boolean;
    pass_2: boolean;
    pass_new_old: boolean;
}

export type ActionButton = ButtonProps