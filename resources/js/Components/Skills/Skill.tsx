import { ReactNode, useEffect, useRef, useState } from "react";
import { IconBootStrap, IconCss, IconFigma, IconGit, IconGitHub, IconHtml, IconJS, IconLaravel, IconMySql, IconPhp, IconReact, IconTailwind, IconTS } from '../Icons'
import { SkillCard } from "@/Components";
import { useInView, Reorder } from "framer-motion";
import { useLang } from "@/Context/LangContext";

type Item = {
    icon: ReactNode;
    name: string;
    id: string;
}

const frontend: Item[] = [
    {id: '1', name: 'HTML', icon: <IconHtml size="64" />},
    {id: '2', name: 'CSS', icon: <IconCss size="64" />},
    {id: '3', name: 'BootStrap', icon: <IconBootStrap size="64" />},
    {id: '4', name: 'Tailwind', icon: <IconTailwind size="64" />},
    {id: '5', name: 'JavaScript', icon: <IconJS size="64" />},
    {id: '6', name: 'TypeScript', icon: <IconTS size="64" />},
    {id: '7', name: 'React', icon: <IconReact size="64" />},
]
const backend: Item[] = [
    {id: '8', name: 'PHP', icon: <IconPhp size="64"/>},
    {id: '9', name: 'Laravel', icon: <IconLaravel size="64" />},
    {id: '10', name: 'MySql', icon: <IconMySql size="64" />},
]
const tools: Item[] = [
    {id: '11', name: 'Git', icon: <IconGit size="64" />},
    {id: '12', name: 'GitHub', icon: <IconGitHub size="64" />},
    {id: '13', name: 'Figma', icon: <IconFigma size="64" />},  
]

interface GroupProps {
    name: string;
    visible: boolean;
    group: Item[];
    setGroup: React.Dispatch<React.SetStateAction<Item[]>>;
    enterAnim: string;
    leaveAnim: string;
}
const SkillGroup = ({name, group, visible, enterAnim, leaveAnim, setGroup}: GroupProps) => {
    const viewPortW = (breakPoint: number) => {
        const [isBelow, setIsBelow] = useState<boolean>(
            typeof window !== "undefined" ? window.innerWidth < breakPoint : false
        );

        useEffect(() => {
            const handleResize = () => {
                setIsBelow(window.innerWidth < breakPoint);
            };

            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }, [breakPoint]);

        return isBelow;
    }
    
    const isBelow = viewPortW(1080);

    return (
        <Reorder.Group axis="x" values={group} onReorder={setGroup}
            className={`flex flex-col gap-y-4 ${visible ? enterAnim : leaveAnim}`}>
            <strong className="text-center">{name}</strong>
            <div className="flex justify-center items-center flex-wrap gap-8">
                {group.map((skill, idx) => {
                    return (
                        <Reorder.Item key={skill.id} value={skill} draggable={!(isBelow && group.length>3)} drag={!(isBelow && group.length>3)}>
                            <SkillCard key={idx} item={skill}/>
                        </Reorder.Item>
                    )
                })}
            </div>
        </Reorder.Group>
    )
}

export const Skills = () => {
    const [backGroup, setBackGroup] = useState<Item[]>(backend);
    const [frontGroup, setFrontGroup] = useState<Item[]>(frontend);
    const [toolsGroup, setToolsGroup] = useState<Item[]>(tools);

    const {lang} = useLang();

    const skillRef = useRef<HTMLElement | null>(null);
    const inView = useInView(skillRef, {
        once:false,
        amount: 0.5
    });

    return (
        <article ref={skillRef} className="flex flex-col gap-y-8 pb-4">
            <SkillGroup name="Backend" 
                group={backGroup}
                setGroup={setBackGroup}
                enterAnim="animate-appear"
                leaveAnim="animate-disappear"
                visible={inView}/>
            <SkillGroup name="Frontend" 
                group={frontGroup} 
                setGroup={setFrontGroup}
                enterAnim="animate-appear-1" 
                leaveAnim="animate-disappear-1"
                visible={inView}/>
            <SkillGroup name={lang === 'en' ? 'Tools' : 'Herramientas'} 
                group={toolsGroup}
                setGroup={setToolsGroup}
                enterAnim="animate-appear-2"
                leaveAnim="animate-disappear-2"
                visible={inView}/>
        </article>
    )
}
