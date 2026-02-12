import { useLang } from "@/Context/LangContext";
import { LanguageBtn } from "@/Components";
import React, { useEffect, useState } from "react";
import { NavbarSmall } from "./NavbarSmall";

type Item = {
    name: string;
    href: string;
}

const items:Item[] = [
    {name: 'Projects', href:'projects'},
    {name: 'Skills', href:'skills'},
    {name: 'About', href:'about'},
    {name: 'Contact', href:'contact'},
]
const itemsEs:Item[] = [
    {name: 'Proyectos', href:'projects'},
    {name: 'Habilidades', href:'skills'},
    {name: 'Sobre Mi', href:'about'},
    {name: 'Contacto', href:'contact'},
]

const isSmallViewport = () => {
  const [isSmallViewport, setIsSmallViewport] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallViewport(window.innerWidth < 640);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isSmallViewport;
};

export const Navbar = () => {
    const [sections, setSections] = useState<Item[]>(items);
    const [menuActive, setMenuActive] = useState(false);
    const isSmall = isSmallViewport();
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
        <nav className="fixed w-full h-fit inset-0 z-40 pb-1 pt-3 sm:pb-3 bg-[#01001a]/80 backdrop-blur-md shadow-xs
            transition-opacity duration-300 opacity-75 hover:opacity-100 overflow-hidden">
            <div className="custom-margin flex justify-between items-center items-center mb-4 sm:mb-0">
                <a href="#" className='flex text-[24px] text-white border rounded-[50%] px-1'>
                    <strong>F</strong>
                    <strong className="text-[#2c9fe3]">R</strong>
                </a>

                <div className="flex gap-x-4 text-[16px] sm:text-[18px] text-white justify-center items-center">
                    {!isSmall && 
                        sections.map((item, idx) => {
                            return(
                                <a href={'#' + item.href}
                                    onClick={(e) => handleScrollToSection(e, item.href)}
                                    key={idx}
                                    className="transition-colors duration-300 ease-in-out hover:text-[#3B82F6]">
                                    {item.name}
                                </a>
                            )
                        })
                    }
                    <LanguageBtn />
                    {isSmall && 
                        <button
                            onClick={() => {setMenuActive(prev => !prev)}} 
                            className="cursor-pointer transition-scale duration-300 ease-in-out hover:scale-110 active:bg-gray-500 p-1 rounded-[50%]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" className={`${menuActive ? 'hidden' : 'block'}`}>
                                <g fill="none">
                                    <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                                    <path fill="currentColor" d="M20 17.5a1.5 1.5 0 0 1 .144 2.993L20 20.5H4a1.5 1.5 0 0 1-.144-2.993L4 17.5zm0-7a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 0 1 0-3zm0-7a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 1 1 0-3z" />
                                </g>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" className={`${menuActive ? 'block' : 'hidden'}`}>
                                <path fill="#fff" d="M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12z" />
                            </svg>
                        </button>
                    }
                </div>
            </div>
            <div className={`${menuActive ? 'max-h-[500px] mt-4' : 'max-h-0'} transition-all duration-300 ease-in-out overflow-hidden flex flex-col gap-y-2`}>
                <NavbarSmall item={sections} action={handleScrollToSection}/>
            </div>
        </nav>
    )
}