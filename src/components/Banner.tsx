import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DynamicForm } from './form/DynamicForm';
import { FormsInputs } from '../types/form';
import { fetchData } from '../services/fetchData';
import { Button } from './Button';
import { ResponseApiDing } from '../types/api';
import { useToast } from '../hooks/useToast';
import { IsoLogoColor } from '../assets/svg/IsoLogoColor';

const container = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            when: 'beforeChildren',
            staggerChildren: 0.8,
        },
    },
};
const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export const Banner: React.FC = () => {
    const [registerAgain, setRegisterAgain] = useState(false);
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const { addToast } = useToast();

    const handleSave = async (values: FormsInputs) => {
        setLoading(true);
        try {
            const response: ResponseApiDing = await fetchData(
                '/manage-subscribers/register',
                'POST',
                {
                    ...values,
                    age: Number(values.age),
                }
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
                setShowModal(false);
            }
        } catch (e: any) {
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
        <>
            <motion.section
                className="relative z-20 bg-gray-800 bg-[url('/assets/img/bg-init.jpg')]"
                initial="hidden"
                animate="show"
                variants={container}
            >
                <div className="bg-dark-green/90 h-screen min-h-[35rem] place-content-center lg:grid">
                    <div className="mx-auto w-screen max-w-screen-xl place-items-center px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:gap-4 lg:px-8 lg:py-32">
                        <motion.div
                            variants={item}
                            className="relative max-w-prose text-left"
                        >
                            {/* <IconsFloating /> */}

                            <motion.div
                                variants={item}
                                className="text-4xl font-bold text-gray-50 sm:text-5xl"
                            >
                                <div className="flex flex-col items-center justify-center gap-3 md:flex-row">
                                    <IsoLogoColor className="w-20" />
                                    <h1 className="text-center font-extralight md:text-start">
                                        San Martín
                                        <br />
                                        <p className="font-extrabold">Innova</p>
                                    </h1>
                                </div>
                            </motion.div>

                            <motion.p
                                variants={item}
                                className="text-mint mt-4 scale-[1.2] text-center sm:text-2xl/relaxed"
                            >
                                <span className="font-pixel">HACKEANDO</span>{' '}
                                <span className="bg-green-opal translate-y-2 px-1 sm:text-[1.2rem] font-medium">
                                    tu futuro
                                </span>
                                <span className="font-pixel pl-1">{'>'}</span>
                            </motion.p>

                            <motion.p
                                variants={item}
                                className="text-white mt-4 text-center sm:text-lg/relaxed"
                            >
                                <strong className="">04.06.2025</strong>{' '}
                                <span className=" pl-1">Club Sportivo Zapallar</span>
                            </motion.p>

                            {/* Button only on small screens */}
                            <motion.div
                                variants={item}
                                className="mt-7 md:hidden flex justify-center"
                            >
                                <Button
                                    onClick={() => setShowModal(true)}
                                    borderClass="!border-gray-300 rounded-sm"
                                >
                                    Sumate al equipo!
                                </Button>
                            </motion.div>
                        </motion.div>

                        {/* Desktop form */}
                        <motion.div
                            variants={item}
                            className="hidden w-full max-w-md rounded-2xl border-2 border-white bg-dark-green/75 px-6 py-8 filter md:block"
                        >
                            <motion.h2
                                variants={item}
                                className="mb-4 text-2xl font-bold text-gray-50"
                            >
                                ¡Trabaja con{' '}
                                <strong className="text-orange">
                                    Nosotros!
                                </strong>
                            </motion.h2>
                            <hr className="mb-5.5 border-gray-200" />
                            <DynamicForm
                                isLoading={loading}
                                className="w-full"
                                floatingLabels
                                actionSaveData={handleSave}
                                requiredFields={[
                                    'fname',
                                    'email',
                                    'phone',
                                    'age',
                                ]}
                                isDisabled={loading && !registerAgain}
                                values={{
                                    fname: '',
                                    email: '',
                                    phone: '',
                                    age: '',
                                }}
                            />
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Modal for mobile form */}
            {showModal && (
                <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/50">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        className="w-full max-w-sm rounded-sm border-2 border-white bg-dark-green p-6"
                    >
                        <div className="flex justify-end">
                            <button
                                onClick={() => setShowModal(false)}
                                className="cursor-pointer rounded-md px-3 py-1 text-xl text-white transition-all hover:bg-gray-600"
                            >
                                ×
                            </button>
                        </div>
                        <h2 className="mb-4 text-2xl font-bold text-gray-50">
                            ¡Trabaja con{' '}
                            <strong className="text-orange">
                                Nosotros!
                            </strong>
                        </h2>
                        <hr className="mb-5.5 border-gray-200" />
                        <DynamicForm
                            isLoading={loading}
                            floatingLabels
                            actionSaveData={handleSave}
                            requiredFields={['fname', 'email', 'phone', 'age']}
                            isDisabled={loading && !registerAgain}
                            values={{
                                fname: '',
                                email: '',
                                phone: '',
                                age: '',
                            }}
                        />
                    </motion.div>
                </div>
            )}
        </>
    );
};
