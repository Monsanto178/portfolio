import { useLang } from "@/Context/LangContext";

interface Props {
    isOpen: boolean;
    type: 'success' | 'error' | '';
    onClose: (bool: boolean) => void;
}

export const Modal = ({ isOpen, type, onClose }: Props) => {
    const {lang} = useLang();
    if (!isOpen) return null;
    if (type === '') return null;
    
    function setTitleLang() {
        if(type === 'error') return lang === 'en' ? 'Oops...' : 'Ups...'
        return lang === 'en' ? 'Success!' : '¡Éxito!'
    }
    function setMessageLang() {
        if(type === 'error') return lang === 'en' ? 'Something went wrong. Please try again' : 'Algo ha salido mal. Por favor intenta nuevamente'
        return lang === 'en' ? 'Your message has been sended, I will be answering in no time!' : 'Tu mensaje ha sido enviado, en breve te estaré contactando!'
    }

    function setIcon() {
        if(type === 'error') {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
                    <path fill="#ffffff" d="M12 17q.425 0 .713-.288T13 16t-.288-.712T12 15t-.712.288T11 16t.288.713T12 17m0-4q.425 0 .713-.288T13 12V8q0-.425-.288-.712T12 7t-.712.288T11 8v4q0 .425.288.713T12 13m0 9q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8" />
                </svg>
            )
        }
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
                <path fill="#ffffff" d="m9 20.42l-6.21-6.21l2.83-2.83L9 14.77l9.88-9.89l2.83 2.83z" />
            </svg>
        )
    }
    const modalStyle = type === 'success' 
        ? 'bg-green-500' 
        : 'bg-red-500';

    return (
        <div className="fixed inset-0 flex justify-center items-center bg-black/90 z-50">
        <div className={`w-96 p-6 rounded-lg ${modalStyle} text-white shadow-lg`}>
            <div className="text-center">
                <div className="flex justify-center items-center">
                    {setIcon()}
                </div>
                <h2 className="text-2xl font-bold mb-4">
                    {setTitleLang()}
                </h2>
                <p>{setMessageLang()}</p>
                <div className="mt-6">
                    <button 
                        onClick={() => {onClose(false)}}
                        className="px-6 py-2 bg-white text-gray-700 rounded-md hover:bg-gray-200 transition-scale duration-300 ease-in-out hover:scale-95 cursor-pointer">
                            {lang === 'en' ? 'Close' : 'Cerrar'}
                    </button>
                </div>
            </div>
        </div>
        </div>
    );
};