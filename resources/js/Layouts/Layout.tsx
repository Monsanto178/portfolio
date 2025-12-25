import { LangProvider } from "../Context/LangContext";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
}

export default function Layout({children}: Props) {
    return(
        <>
            <LangProvider>
                {children}
            </LangProvider>
        </>
    )
}