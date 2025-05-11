import { FormEvent, useCallback, useEffect, useMemo, useState } from 'react';
import {
    formValidate,
    OBJECT_LABELS_FIELDS,
    OBJECT_PLACEHOLDERS_FIELDS,
} from '../../common/helpers';
import { Input } from './Input';
import { useForm } from '../../hooks/useForm';
import {
    FieldsFormUser,
    FormsInputs,
    ObjectErrorsMessages,
} from '../../types/form';
import { Button } from '../Button';
import { ButtonProps } from '../buttons/Button';
import { Loader } from '../loader/Loader';

interface DynamicFormProps {
    values: FormsInputs;
    shouldShowErrors?: boolean;
    requiredFields?: FieldsFormUser[];
    updateActions?: React.Dispatch<React.SetStateAction<ButtonProps[]>>;
    actionSaveData: (values: FormsInputs) => void;
    showSubmit?: boolean;
    floatingLabels?: boolean;
    isDisabled?: boolean;
    labelSubmit?: string;
    className?: string;
    isLoading?: boolean;
}

export const DynamicForm = ({
    isLoading = false,
    className = '',
    values,
    shouldShowErrors,
    requiredFields,
    updateActions,
    actionSaveData,
    showSubmit = true,
    floatingLabels = false,
    isDisabled = false,
    labelSubmit = 'Enviar',
}: DynamicFormProps) => {
    /**
     * =========================================================================================================================
     * WORK IN PROGRESS | 'DynamicForm' IS NOT FINISHED
     * =========================================================================================================================
     */

    const [flag, setFlag] = useState(shouldShowErrors);
    const [errorMsg, setErrorMsg] = useState({} as ObjectErrorsMessages);
    const [formValues, handleInputChange, reset] = useForm({
        ...values,
    } as FormsInputs);

    const memoizedRequiredFields = useMemo(
        () => requiredFields,
        [requiredFields]
    );

    useEffect(() => {
        const msgs = formValidate(
            formValues as FormsInputs,
            memoizedRequiredFields
        );
        setErrorMsg(msgs);
    }, [formValues]);

    useEffect(() => {
        if (updateActions)
            updateActions([
                {
                    action: handleSave,
                    label: 'Guardar',
                    type: 'submit',
                    disabled: flag && errorMsg.hasErrors,
                },
            ]);
    }, [flag, errorMsg]);

    const handleSave = useCallback(
        (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            setFlag(true);
            if (!errorMsg.hasErrors) {
                actionSaveData(formValues);
                setFlag(false)
            }
        },
        [errorMsg, formValues]
    );

    useEffect(() => {
        if (values && JSON.stringify(values) !== JSON.stringify(formValues)) {
            reset(values);
        }
    }, [values]);

    return (
        <form onSubmit={handleSave} className={className}>
            <div className="flex flex-col gap-5.5">
                {Object.entries(formValues as FormsInputs).map(
                    ([key, value]) => {
                        return (
                            <Input
                                disabled={isDisabled}
                                key={key}
                                label={
                                    OBJECT_LABELS_FIELDS[
                                        key as keyof FormsInputs
                                    ]
                                }
                                name={key}
                                type={
                                    key === 'password' || key === 'password2'
                                        ? 'password'
                                        : 'text'
                                }
                                onChange={handleInputChange}
                                value={value}
                                placeholder={
                                    OBJECT_PLACEHOLDERS_FIELDS[
                                        key as keyof FormsInputs
                                    ]
                                }
                                errorMsg={
                                    flag
                                        ? errorMsg[key as keyof FormsInputs]
                                        : ''
                                }
                                isFloatingLabel={floatingLabels}
                                inputClass='focus-within:!ring-mint focus-within:!border-mint !rounded-md text-white'
                            />
                        );
                    }
                )}
                {showSubmit && (
                    <Button
                        // bgClass='!bg-mint'
                        onClick={handleSave}
                        type="submit"
                        disabled={flag && errorMsg.hasErrors}
                        borderClass='!border-gray-300 rounded-md'

                    >
                        {
                            isLoading
                                ? <Loader text='enviando' />
                                : labelSubmit
                        }
                    </Button>
                )}
            </div>
        </form>
    );
};
