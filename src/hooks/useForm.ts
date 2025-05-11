import { useState, ChangeEvent } from 'react';

// Definir un tipo genérico <T> para que sea reutilizable con cualquier formulario
export const useForm = <T extends Record<string, any>>(initialState: T) => {
    const [values, setValues] = useState<T>(initialState);

    const reset = (st: T) => {
        setValues(st);
    };

    const handleInputChange = (
        e: ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, type } = e.target;
        let value: boolean | number | string;

        if (type === 'checkbox') {
            value = (e.target as HTMLInputElement).checked;
        } else if (type === 'select-one') {
            value = isNaN(Number(e.target.value))
                ? e.target.value
                : Number(e.target.value);
        } else {
            value = e.target.value;
        }

        setValues({
            ...values,
            [name]: value,
        });
    };

    return [values, handleInputChange, reset, setValues] as const;
};
