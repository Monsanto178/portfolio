type Item = {
    name: string;
    href: string;
}

interface Props {
    item: Item[];
    action: (e: React.MouseEvent, targetId:string) => void
}

export const NavbarSmall = ({item, action}: Props) => {
    return (
        item.map((el, idx) => {                            
            return(
                <a href={'#' + el.href}
                    onClick={(e) => action(e, el.href)}
                    key={idx}
                    className="transition-colors duration-300 ease-in-out hover:text-[#3B82F6] active:bg-gray-500 px-5 font-semibold">
                    {el.name}
                </a>
            )
    })
    )
}