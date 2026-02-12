import { ProjectType } from "@/types";
import { Circle } from "lucide-react";
import { useEffect, useState } from "react";

interface Props {
    project: ProjectType;
}
interface CircleProp {
    arrLength:number;
    currentIdx:number;
    moveTo: (idx:number) => void;
}
const CreateCircles = ({arrLength, moveTo, currentIdx}: CircleProp) => {
    const defaultMap = [];
    for (let i = 0; i < arrLength; i++) {
        defaultMap.push(i);
    }
    return (
        defaultMap.map((_,  idx) => {
            return (
                <button
                    key={idx}
                    onClick={() => {moveTo(idx)}} 
                    className={`w-fit h-fit cursor-pointer transition-scale duration-300 ease-in-out hover:scale-120 ${currentIdx === idx ? 'scale-120' : ''}`}>
                    <Circle key={idx} fill="orange" stroke="orange" className="w-4 h-4 sm:w-6 sm:-h-6 md:w-5 md:h-5"/>
                </button>
            )
        })
    )
}

export const ImgContainer = ({project}: Props) => {
    const limit = project.images.length
    const [currentIdx, setCurrentIdx] = useState<number>(0);

    const moveIdx = () => {
        if (currentIdx >= limit-1) {
            setCurrentIdx(0)
            return;
        }

        setCurrentIdx((prev) => prev + 1)
    }

    const moveTo = (idx:number) => {
        setCurrentIdx(idx)
    }

    useEffect(() => {
        const interval = setInterval(moveIdx, 3000);
        return () => clearInterval(interval);
    }, [currentIdx])
    return (
        <div className="flex flex-col gap-y-4">
            <div className="flex w-full items-center overflow-hidden">
                {project.images.map((imge, idx) => {
                    return (
                        <picture 
                            key={idx} className="min-w-full min-h-full transition-transform duration-500 ease-in-out"
                            style={{transform:`translateX(calc(-${currentIdx * 100}%))`}}>
                            <img src={imge} alt="project-screen" />
                        </picture>
                    )
                })}
            </div>
            <div className="flex gap-x-4 items-center justify-center">
                <CreateCircles arrLength={limit} moveTo={moveTo} currentIdx={currentIdx}/>
            </div>
        </div>
    )
}