import { useState } from 'react';
import { FormsInputs } from '../../types/form';
import { DynamicForm } from '../form/DynamicForm';
import { DataErrorResponse, ResponseApiDing } from '../../types/api';
import { P } from '../paragraph/Paragraph';
import { fetchData } from '../../services/fetchData';
import { useToast } from '../../hooks/useToast';

export const LandingForm = () => {
    const [registerAgain, setRegisterAgain] = useState(false);
    const [loading, setLoading] = useState(false);
    const { addToast } = useToast();

    const handleSave = async (values: FormsInputs) => {
        setLoading(true);
        try {
            const response: ResponseApiDing = await fetchData(
                '/manage-subscribers/register',
                'POST',
                { ...values, age: Number(values.age) }
            );

            if (response.status === 'warn') {
                addToast({
                    type: 'warning',
                    title: 'No se pudo registrar usuario',
                    description: response.message,
                });
                setRegisterAgain(true);
            } else {
                addToast({
                    type: 'success',
                    title: '¡Éxito!',
                    description: response.message,
                    toastButton: {
                        action: () => setRegisterAgain(true),
                        text: 'Registrar otro usuario',
                    },
                });
            }
        } catch (e: DataErrorResponse | any) {
            addToast({
                type: 'danger',
                title: 'Error',
                description: e.message,
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="left-0 top-0 z-10 flex h-full w-full items-center justify-around pt-14">
            <img
                src="https://png.pngtree.com/png-clipart/20240502/original/pngtree-flat-design-concepts-online-learning-with-online-teacher-in-computer-png-image_14991355.png"
                className="hidden max-h-full w-3/5 lg:block"
            />
            <div className="flex w-full flex-col items-center gap-5 px-8 lg:w-2/5 lg:px-0">
                <P className="text-center !text-4xl font-semibold">
                    ¡Regístrate!
                </P>
                <P variant="helper" size="lg">
                    ¡Te contactaremos con novedades sobre el evento!
                </P>
                <div className="w-full lg:w-96">
                    <DynamicForm
                        floatingLabels
                        actionSaveData={handleSave}
                        showSubmit={!loading}
                        requiredFields={['fname', 'email', 'phone', 'age']}
                        isDisabled={loading && !registerAgain}
                        values={{
                            fname: '',
                            email: '',
                            phone: '',
                            age: '',
                        }}
                    />
                </div>
            </div>
        </div>
    );
};
