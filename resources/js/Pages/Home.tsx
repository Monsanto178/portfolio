import { Banner, Navbar, StarsBg, ProjectCard, About, Skills, ContactForm} from '@/Components';
import { projects } from '@/data/projects';
import { useLang } from '@/Context/LangContext';
import contactMe from '@assets/images/contact_me.webp';

export default function Home() {
    const {lang} = useLang();

    return(
        <section className='overflow-hidden'>
            <StarsBg />
            <Navbar />
            <Banner />

            <section className='custom-margin' id='projects'>
                <h2 className='text-[28px] text-center font-bold pt-16 pb-8 sm:pb-0'>
                    <span>{lang === 'en' ? 'My' : 'Mis'}</span>
                    <span className='text-[#2c9fe3]'> {lang === 'en' ? 'Projects' : 'Proyectos'}</span>
                </h2>

                <section className='flex flex-col gap-y-12'>
                    {projects.map((project, idx) => {
                        return (
                            <ProjectCard key={idx} project={project}/>
                        )
                    })}
                </section>

            </section>

            <section className='custom-margin min-h-screen flex flex-col justify-between' id='skills'>
                <h2 className='text-[28px] text-center font-bold pt-16 pb-8 sm:pb-0'>
                    <span>{lang === 'en' ? 'My' : 'Mis'}</span>
                    <span className='text-[#2c9fe3]'> {lang === 'en' ? 'Skills' : 'Habilidades'}</span>
                </h2>

                <Skills />
            </section>

            <section className='custom-margin min-h-screen' id='about'>
                <h2 className='text-[28px] text-center font-bold pt-16 pb-8 sm:pb-0'>
                    <span>{lang === 'en' ? 'About' : 'Sobre'}</span>
                    <span className='text-[#2c9fe3]'> {lang === 'en' ? 'Me' : 'Mí'}</span>
                </h2>

                <About />
            </section>

            <section className='custom-margin min-h-screen flex flex-col justify-between' id='contact'>
                <h2 className='text-[28px] text-center font-bold pt-16 pb-8 sm:pb-0'>
                    <span>{lang === 'en' ? 'Contact' : 'Contácta'}</span>
                    <span className='text-[#2c9fe3]'>{lang === 'en' ? ' Me' : 'me'}</span>
                </h2>
                <section className='mb-10 flex lg:flex-row flex-col gap-y-12 items-center'>
                    <picture className='p-4 hidden lg:block'>
                        <img className='max-w-full max-h-full' draggable={false} src={contactMe} alt="contact" />
                    </picture>
                    <ContactForm />
                </section>
            </section>

        </section>
    )
}