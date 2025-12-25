import { LucideExternalLink, LucideFolderSymlink, LucideMessageCircle } from "lucide-react"
import example from '@assets/profile_example.webp';
import { useRef } from "react";
import { useInView } from "framer-motion";
import { useLang } from "@/Context/LangContext";

export const About = () => {
    const {lang} = useLang();

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
                        <img src={example} alt="profile_pic" />
                    </picture>
                    <div className="flex gap-x-2 justify-between">
                        <LucideExternalLink />
                        <LucideFolderSymlink />
                        <LucideMessageCircle />
                    </div>
                </div>                
            </div>

            <div className={`flex justify-center items-center pb-8 sm:pb-2 ${inView ? 'animate-appear-1' : 'animate-disappear-1'}`}>
                <a href="mailto:jorge@gmail.com"
                    className='flex action-button w-fit h-fit'>
                    <h4>{lang === 'en' ? 'Get in Touch!' : 'Contáctame!'}</h4>
                </a>
            </div>

            {/* <div className="">
                <div className="flex gap-x-2">
                    <h4>Visit my Linkedin</h4>
                    <LucideFolderSymlink />
                </div>

                <div className="flex gap-x-2">
                    <h4>Watch my GitHub</h4>
                    <LucideExternalLink />
                </div>

                <div className="flex gap-x-2">
                    <h4>Contact Me</h4>
                    <LucideMessageCircle />
                </div>
            </div> */}
        </article>
    )
}