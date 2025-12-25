import { Circle, LucideGlobe } from "lucide-react";
import { ProjectType } from "@/types";
import { useRef } from "react";
import { useInView } from "framer-motion";

interface Props {
    project: ProjectType;
}

export const ProjectCard = ({project}: Props) => {
    const projectRef = useRef<HTMLElement | null>(null);
    const inView = useInView(projectRef, {
        once:false,
        amount: 0.5
    });
    
    return (
        <article ref={projectRef}
            className={`flex flex-col items-start justify-center min-h-[80vh] mt-15 sm:mt-2
                ${inView ? 'animate-appear' : 'animate-disappear'}`}>
            <div className="flex flex-col justify-between items-start md:flex-row gap-4">
                <div className="flex flex-col gap-y-4 bg-[#1E1E3F] p-4 min-w-[45%] h-fit rounded-[20px] shadow-[0_4px_8px_rgba(0,0,0,0.4)]">
                    <strong className="text-[18px] text-[#00A9E0]">{project.title}</strong>
                    <picture className="w-full">
                        {project.images.map((image) => {
                            return <img src={image} alt="project-screen" />
                        })}
                    </picture>
                    <Circle size={20} fill="orange" stroke="orange"/>
                </div>

                <div className="flex flex-col gap-y-3">
                    <div className="flex justify-between items-center">
                        <a href={project.github} className="flex gap-x-2 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" 
                                width="28" 
                                height="28" 
                                viewBox="0 0 24 24">
                                    <path 
                                        fill="#fff" 
                                        d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/>
                            </svg>
                            <span>Repo</span>
                        </a>
                        <a href={project.deploy} className="flex gap-x-2 items-center">
                            <LucideGlobe />
                            <span>Deploy</span>
                        </a>
                    </div>

                    <p>{project.description}</p>

                    <div className="flex gap-x-2">
                        {project.tecnologies.map((el) => {
                            return (
                                <div className="flex gap-x-2 bg-[#6C63FF] py-2 px-3 rounded-[15px] pointer-events-none">
                                    <span>{el.name}</span>
                                    {el.icon}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </article>
    )
}