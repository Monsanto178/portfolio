import { ProjectType } from '@/types';
import { Banner, Navbar, PresentCard, StarsBg, ProjectCard, About, Skills} from '../Components';
import image from '@assets/projects/mangaTail.png';
import { LucideActivity, LucideAlbum, LucideEarthLock } from 'lucide-react';
import { useLang } from '@/Context/LangContext';

const project: ProjectType = {
    title: 'MangaTail',
    github: '#',
    deploy: '#',
    tecnologies: [
        {name: 'Laravel', icon: <LucideEarthLock />},
        {name: 'React', icon: <LucideActivity />},
        {name: 'TypeScript', icon: <LucideAlbum />},
    ],
    images: [image],
    description: `A manga website created with Laravel, React & TypeScript.
        In this project I used inertiaJs for integrate the backend with the frontend.
        The project consist in a website that consume an api from Jikan Moe (an unnofficial api from MyAnimeList).
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore amet voluptatibus iure consequatur ullam, 
        minus doloribus quam cupiditate quis, laborum, labore eum nihil debitis animi laboriosam dolor quod modi enim?
        Necessitatibus perspiciatis atque eaque quasi deleniti tempore fuga vel quo aliquam cumque ipsum, sint 
        nesciunt blanditiis, animi amet repellat libero esse voluptatum earum accusantium facilis quibusdam culpa recusandae! Facilis?`,
    details: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore amet voluptatibus iure consequatur ullam, 
        minus doloribus quam cupiditate quis, laborum, labore eum nihil debitis animi laboriosam dolor quod modi enim?
        Necessitatibus perspiciatis atque eaque quasi deleniti tempore fuga vel quo aliquam cumque ipsum, sint 
        illum unde nostrum minima repudiandae explicabo dolorem quae nihil magni porro culpa ea, eius eos? Cupiditate.
        Consequuntur vel maxime odit perspiciatis quia fugit dolore sequi, vitae molestias nam, eius eveniet alias 
        nesciunt blanditiis, animi amet repellat libero esse voluptatum earum accusantium facilis quibusdam culpa recusandae! Facilis?`
}

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
                <ProjectCard project={project}/>

                <ProjectCard project={project}/>

                <ProjectCard project={project}/>

            </section>

            <section className='custom-margin min-h-screen flex flex-col justify-between' id='skills'>
                <h2 className='text-[28px] text-center font-bold pt-16 pb-8 sm:pb-0'>
                    <span>{lang === 'en' ? 'My' : 'Mis'}</span>
                    <span className='text-[#2c9fe3]'> {lang === 'en' ? 'Skills' : 'Habilidades'}</span>
                </h2>

                <Skills />
            </section>

            <section className='custom-margin' id='about'>
                <h2 className='text-[28px] text-center font-bold pt-16 pb-8 sm:pb-0'>
                    <span>{lang === 'en' ? 'About' : 'Sobre'}</span>
                    <span className='text-[#2c9fe3]'> {lang === 'en' ? 'Me' : 'Mí'}</span>
                </h2>

                <About />
            </section>
        </section>
    )
}