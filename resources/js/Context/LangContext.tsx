import { createContext, Provider, ReactNode, useContext, useState } from "react";

type Language = 'en' | 'es';

type LangContextType = {
    lang: Language;
    changeLang: (lang: Language) => void;
}
const defaultLang: LangContextType = {
    lang: 'en',
    changeLang: () => {}
}
const LanguageContext = createContext<LangContextType>(defaultLang);

interface ProviderProps {
    children: ReactNode
}

export const LangProvider = ({children}: ProviderProps) => {
    const [lang, setLang] = useState<Language>('en');

    const changeLang = (language: Language) => {
        setLang(language);
    };

    return (
        <LanguageContext.Provider value={{lang, changeLang}}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLang = () => useContext(LanguageContext);