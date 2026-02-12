import { useLang } from "@/Context/LangContext";
import { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Modal } from "../Modal/Modal";

export const ContactForm = () => {
    const {lang} = useLang();
    const [sending, setSending] = useState<boolean>(false);
    const [modalOpen, setModalOpen] = useState<boolean>(true);
    const [resType, setResType] = useState<'error' | 'success' | ''>('')

    const getCsrfToken = async () => {
        const response = await fetch('/csrf-token');
        const data = await response.json();
        return data.csrf_token;
    };

    const {
        register, 
        handleSubmit, 
        formState: {errors},
        reset,
        watch
    } = useForm();

    const contentValue = watch('content');

    
    const onSubmit: SubmitHandler<FieldValues> = async (data: FieldValues) => {
        setSending(true);
        const csrfToken = await getCsrfToken();
         
        try {
            const response = await fetch('/send', {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': csrfToken as string
                },
                body: JSON.stringify(data),
                credentials: 'include',
            });

            if (!response.ok) throw new Error('Failed to send your message');

            setResType('success');
            
            reset();
        } catch (error) {
            setResType('error');
            console.error(error);
        } finally {
            setModalOpen(true);
            setSending(false);
        }
    }
    useEffect(() => {
        const textarea = document.getElementById('content') as HTMLTextAreaElement;
        if (textarea) {
            textarea.style.height = 'auto';
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
    }, [contentValue]);

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col w-full max-w-[60dvw] min-h-full min-w-full md:min-w-[45%] justify-center gap-y-6 bg-[#1E1E3F] p-4 rounded-2xl">
                <div className="flex flex-col gap-y-2">
                    <label htmlFor="name">{lang === 'en' ? 'Name' : 'Nombre'}</label>
                    <input type="text"
                        {...register('name', {
                            required: {
                                value:true,
                                message: `${lang === 'en' ? 'Name required' : 'Nombre requerido'}`
                            },
                            minLength: {
                                value:3,
                                message: `${lang === 'en' ? 'This name is too short' : 'Este nombre es demasiado corto'}`
                            },
                            maxLength: {
                                value: 20,
                                message: `${lang === 'en' ? 'This name is too long' : 'Este nombre es demasiado largo'}`
                            }
                        })}
                        className="border-b-2 border-gray-400 p-2 w-full resize-none focus:outline-none"
                        name="name"
                        id="name"
                        placeholder={lang === 'en' ? 'Insert your name' : 'Ingrese su nombre'}
                    />
                    {errors.name && typeof errors.name.message === 'string' && <span className="text-red-500 text-sm mt-1">{errors.name.message}</span>}
                </div>
                <div className="flex flex-col gap-y-2">
                    <label htmlFor="email">{lang === 'en' ? 'Email' : 'Correo'}</label>
                    <input type="email"
                        {...register('email', {
                            required: {
                                value: true,
                                message: `${lang === 'en' ? 'Email required' : 'Correo requerido'}`
                            },
                            pattern: {
                                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                                message: `${lang === 'en' ? 'Invalid email' : 'Correo inválido'}`
                            }
                        })}
                        className="border-b-2 border-gray-400 p-2 w-full resize-none focus:outline-none"
                        name="email"
                        id="email"
                        placeholder='example@gmail.com'
                    />
                    {errors.email && typeof errors.email.message === 'string' && <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>}
                </div>


                <div className="flex flex-col gap-y-2">
                    <label htmlFor="content">{lang === 'en' ? 'Message' : 'Mensaje'}</label>
                    <textarea 
                        {...register('content', {
                            required: {
                                value: true,
                                message: `${lang === 'en' ? 'Please insert your message' : 'Por favor ingrese su mensaje'}`
                            },
                            minLength: {
                                value:5,
                                message: `${lang === 'en' ? 'Message must be at least 4 characters long' : 'El mensaje debe tener al menos 4 carácteres de longitud'}`
                            },
                            maxLength: {
                                value: 200,
                                message: `${lang === 'en' ? 'Message has exceeded 200 characters' : 'El mensaje ha excedido los 200 carácteres'}`
                            }
                        })}
                        placeholder={lang === 'en' ? 'Type your message here' : 'Escribe tu mensaje aquí'}
                        className="border-b-2 border-gray-400 p-2 w-full resize-none overflow-hidden focus:outline-none"
                        maxLength={200}
                        name="content"
                        id="content">
                    </textarea>
                    {errors.content && typeof errors.content.message === 'string' && <span className="text-red-500 text-sm mt-1">{errors.content.message}</span>}
                </div>

                <Modal isOpen={modalOpen} type={resType} onClose={setModalOpen}/>

                <div className="flex justify-center items-end mt-6">
                    {!sending && 
                        <button className='flex action-button w-fit h-fit'>{lang === 'en' ? 'Send' : 'Enviar'}</button>
                    }
                    {sending && 
                        <button className='flex action-button-disabled w-fit h-fit'>{lang === 'en' ? 'Sending...' : 'Enviando...'}</button>
                    }
                </div>
            </form>
        </>
    )
}