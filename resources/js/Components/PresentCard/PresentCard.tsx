import { useLang } from "@/Context/LangContext"

export const PresentCard = () => {
    const {lang} = useLang();

    return(
        <article className="absolute inset-0 flex flex-col gap-y-4 justify-center items-center z-10">
            <div className="flex flex-col gap-y-2 justify-center items-center p-4">
                <h1 className="relative max-w-4xl mx-auto text-center z-15 text-[2em] font-bold">
                    <span className="opacity-0 animate-fade-in">
                        {`${lang === 'en' ? `Hi there, I'm ` : 'Hola, soy '}`}
                    </span>
                    <span className="opacity-0 animate-fade-in-delay-1 text-[#2c9fe3]"> 
                        Federico
                    </span>
                    <span className="opacity-0 animate-fade-in-delay-2">
                        {`${lang === 'en' ? ` Rosello` : ' Roselló'}`}
                    </span>
                </h1>
                <p className="flex flex-col text-center text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                    <span>
                        {`${lang === 'en' ? `I'm a passionate and detail-oriented web developer` : 'Soy un desarrollador web apasionado y orientado al detalle'}`}
                    </span>
                    <span>
                        {`${lang === 'en' 
                            ? `with experience in building responsive and user-friendly websites.` 
                            : 'con experiencia en la creación de sitios web responsivos y fáciles de usar.'}`}
                    </span>
                </p>
            </div>

            <div className="opacity-0 animate-fade-in-delay-4">
                <button className="action-button">
                    {lang === 'en' ? 'Download CV' : 'Descargar CV'}
                </button>
            </div>
        </article>
    )
}