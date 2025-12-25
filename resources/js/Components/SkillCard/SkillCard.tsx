import { ReactNode } from "react"

type Item = {
    icon: ReactNode;
    name: string;
    id: string;
}

interface Props {
    item: Item;
}

export const SkillCard = ({item}: Props) => {
    return (
        <div className="bg-[#1E1E3F] cursor-grab px-4 py-2 rounded-xl flex flex-col gap-y-2 justify-center items-center w-24 h-28 active:cursor-grabbing">
            {item.icon}
            <span className="font-semibold text-[#D1D5DB]">{item.name}</span>
        </div>
    )
}