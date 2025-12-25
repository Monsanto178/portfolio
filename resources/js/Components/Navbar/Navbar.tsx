import { useLang } from "@/Context/LangContext";
import { LanguageBtn } from "@/Components";
import React, { useEffect, useState } from "react";

type Item = {
    name: string;
    href: string;
}

const items:Item[] = [
    {name: 'Home', href:'home'},
    {name: 'Projects', href:'projects'},
    {name: 'Skills', href:'skills'},
    {name: 'About', href:'about'},
]
const itemsEs:Item[] = [
    {name: 'Inicio', href:'home'},
    {name: 'Proyectos', href:'projects'},
    {name: 'Habilidades', href:'skills'},
    {name: 'Sobre Mi', href:'about'},
]

export const Navbar = () => {
    const [sections, setSections] = useState<Item[]>(items);
    const {lang} = useLang();

    const handleScrollToSection = ((e:React.MouseEvent, targetId: string) => {
        e.preventDefault();
        const section = document.getElementById(targetId);
        if(section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });

    useEffect(() => {
        if(lang === 'en') {
            setSections(items)
        } else {
            setSections(itemsEs)
        }
    }, [lang])

    return (
        <nav className="fixed w-full h-fit inset-0 z-40 py-3 bg-[#01001a]/80 backdrop-blur-md shadow-xs
            transition-opacity duration-300 opacity-75 hover:opacity-100">
            <div className="custom-margin flex justify-between items-center">
                <a href="#" className='flex text-[24px] text-white border rounded-[50%] px-1'>
                    <strong>F</strong>
                    <strong className="text-[#2c9fe3]">R</strong>
                </a>

                <div className="flex gap-x-4 text-[18px] text-white justify-center items-center">
                    {sections.map((item, idx) => {
                        return(
                            <a href={'#' + item.href}
                                onClick={(e) => handleScrollToSection(e, item.href)}
                                key={idx}
                                className="transition-colors duration-300 ease-in-out hover:text-[#3B82F6]">
                                {item.name}
                            </a>
                        )
                    })}
                    <LanguageBtn />
                </div>
            </div>
        </nav>
    )
}