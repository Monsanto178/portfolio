import { LucideExternalLink, LucideFolderSymlink, LucideMessageCircle } from "lucide-react"
import aboutMe from '@assets/images/about_me.webp';
import { useRef } from "react";
import { useInView } from "framer-motion";
import { useLang } from "@/Context/LangContext";

export const About = () => {
    const {lang} = useLang();

    const handleDownloadCV = () => {
        const endpoint = lang === 'en' ? '/download-cv-en' : '/download-cv-es';

        window.location.href = endpoint;
    }

    const skillRef = useRef<HTMLElement | null>(null);
    const inView = useInView(skillRef, {
        once:false,
        amount: 0.4
    });
    return (
        <article ref={skillRef} className="min-h-screen flex flex-col gap-y-12 items-center justify-center">
            <div className={`flex flex-col sm:flex-row sm:justify-beetween items-center gap-y-4 sm:gap-x-4 ${inView ? 'animate-appear' : 'animate-disappear'}`}>
                <div className="flex flex-col justify-between gap-y-2 w-full sm:w-[60%]">
                    <p> 
                        {lang === 'en' 
                            ? `I am a web developer passionate about creating digital solutions that enhance user experience. 
                                I hold an Associate's degree in Software Development and specialize in building functional, intuitive, and visually appealing applications and websites.`
                            : `Soy un desarrollador web apasionado por la creación de soluciones digitales que mejoren la experiencia de los usuarios. 
                                Soy Técnico en Desarrollo de Software y me especializo en construir aplicaciones y sitios web funcionales, intuitivos y visualmente atractivos.`
                        }
                    </p>

                    <p>
                        {lang === 'en' 
                            ? `I love learning new technologies and constantly strive to stay up to date with the latest trends in web development. 
                                My focus is always on writing clean, scalable code, aiming not only to make things work, but also to ensure they are easy to maintain.`
                            : `Me encanta aprender nuevas tecnologías y me esfuerzo constantemente por mantenerme actualizado en las últimas tendencias del desarrollo web. 
                                Mi enfoque siempre está en escribir código limpio y escalable, buscando no solo hacer que las cosas funcionen, sino también que sean fáciles de mantener.`
                        }
                    </p>

                    <p>
                        {lang === 'en' 
                            ? `In addition to my technical skills, I have a strong focus on problem-solving and continuous improvement. 
                                I enjoy tackling complex challenges and finding innovative solutions that deliver real value to users.`
                            : `Además de mi habilidad técnica, tengo una fuerte orientación hacia la resolución de problemas y la mejora continua. 
                                Disfruto enfrentándome a desafíos complejos y encontrar soluciones innovadoras que ofrezcan valor real a los usuarios.`
                        }

                    </p>
                </div>

                <div className="flex flex-col gap-y-2 w-full sm:w-[40%]">
                    <picture className="rounded-2xl overflow-hidden">
                        <img src={aboutMe} draggable={false} alt="profile_pic" />
                    </picture>
                    <div className="flex gap-x-2 justify-between items-center">
                        <a href={'https://github.com/Monsanto178'} target="_blank" rel="noopener noreferrer" title="GitHub"
                        className="transition-scale duration-300 ease-in-out hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" 
                                width="28" 
                                height="28" 
                                viewBox="0 0 24 24">
                                    <path 
                                        fill="#fff" 
                                        d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/>
                            </svg>
                        </a>
                        <a href={'https://www.linkedin.com/in/federico-rosello/'} target="_blank" rel="noopener noreferrer" title="Linkedin"
                        className="transition-scale duration-300 ease-in-out hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
                                <path fill="#fff" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" />
                            </svg>
                        </a>
                        <a href='mailto:federicogrosell@gmail.com' title="Email"
                        className="transition-scale duration-300 ease-in-out hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
                                <path fill="#fff" d="M20 18h-2V9.25L12 13L6 9.25V18H4V6h1.2l6.8 4.25L18.8 6H20m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2" />
                            </svg>
                        </a>
                        <button  title="My CV"
                            onClick={handleDownloadCV}
                            className="cursor-pointer transition-scale duration-300 ease-in-out hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 20 20">
                                <g fill="#fff">
                                    <path d="M7.8 6.35c.56 0 1.01-.45 1.01-1.01S8.36 4.33 7.8 4.33s-1.01.45-1.01 1.01s.45 1.01 1.01 1.01" />
                                    <path fillRule="evenodd" d="M9.83 8.55c0-1.08-.91-1.86-2.03-1.86s-2.03.78-2.03 1.86v.51c0 .09.04.18.1.24s.15.1.24.1h3.38c.09 0 .18-.04.24-.1s.1-.15.1-.24zM5.75 11.5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75" clipRule="evenodd" />
                                    <path fillRule="evenodd" d="M2.5 2.5c0-1.102.898-2 2-2h6.69c.562 0 1.092.238 1.465.631l.006.007l4.312 4.702c.359.383.527.884.527 1.36v10.3c0 1.102-.898 2-2 2h-11c-1.102 0-2-.898-2-2zm8.689 0H4.5v15h11V7.192l-4.296-4.685l-.003-.001z" clipRule="evenodd" />
                                    <path fillRule="evenodd" d="M11.19.5a1 1 0 0 1 1 1v4.7h4.31a1 1 0 1 1 0 2h-5.31a1 1 0 0 1-1-1V1.5a1 1 0 0 1 1-1" clipRule="evenodd" />
                                </g>
                            </svg>
                        </button>
                    </div>
                </div>                
            </div>
        </article>
    )
}