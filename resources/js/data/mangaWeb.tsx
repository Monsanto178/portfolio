import { IconInertiaJs, IconLaravel, IconReact, IconTS } from '@/Components/Icons';
import { ProjectType } from '@/types';
import manga_01 from '@assets/projects/mangaWeb_01.webp'
import manga_02 from '@assets/projects/mangaWeb_02.webp'
import manga_03 from '@assets/projects/mangaWeb_03.webp'
import manga_04 from '@assets/projects/mangaWeb_04.webp'
import manga_05 from '@assets/projects/mangaWeb_05.webp'
import manga_06 from '@assets/projects/mangaWeb_06.webp'
import manga_07 from '@assets/projects/mangaWeb_07.webp'
import manga_08 from '@assets/projects/mangaWeb_08.webp'
import manga_09 from '@assets/projects/mangaWeb_09.webp'
import manga_10 from '@assets/projects/mangaWeb_10.webp'

export const mangaWeb: ProjectType = {
    title: 'MangaTail',
    github: 'https://github.com/Monsanto178/manga-website',
    deploy: '#',
    tecnologies: [
        {name: 'Laravel', icon: <IconLaravel color={false}/>},
        {name: 'React', icon: <IconReact color={false}/>},
        {name: 'TypeScript', icon: <IconTS color={false}/>},
    ],
    images: [
        manga_01,
        manga_02,
        manga_03,
        manga_04,
        manga_05,
        manga_06,
        manga_07,
        manga_08,
        manga_09,
        manga_10,
    ],
    description: {
        es: `Este proyecto consiste en un web interactivo que utiliza la API no oficial de Jikan.moe (Jikan API) para mostrar una amplia variedad de 
            mangas, novelas y otras obras relacionadas, extraídas de MyAnimeList.`,
        en: `This project is an interactive web platform that uses the unofficial Jikan.moe API (Jikan API) to display a wide variety of 
            mangas, novels, and other related works pulled from MyAnimeList.`
    },
    features: {
        es: [
            'Visualización de mangas: Se pueden explorar las obras más populares, recientes, recomendadas y destacadas.',
            'Búsqueda y filtrado avanzado: Permite buscar mangas específicos y filtrar los resultados por tipo de obra y estado.',
            'Reseñas de usuarios: Se integra una sección para mostrar las reseñas más recientes de usuarios de MyAnimeList, proporcionando valor añadido a la comunidad.',
            'Información detallada: Cada manga cuenta con una página de detalles que incluye datos relevantes como personajes, obras relacionadas, autores y reseñas de otros usuarios.',
            'Diseño responsivo: El sitio está optimizado para ofrecer una experiencia fluida y adaptativa en diferentes dispositivos.'
        ],
        en: [
            'Manga Viewing: Users can explore the most popular, recent, recommended, and featured works.',
            'Advanced Search and Filtering: Users can search for specific mangas and filter results by type of work and status.',
            'User Reviews: A section that displays the most recent user reviews from MyAnimeList, adding value to the community.',
            'Detailed Information: Each manga has a detailed page containing relevant information such as characters, related works, authors, and user reviews.',
            'Responsive Design: The platform is optimized to provide a smooth and adaptive experience across various devices.'
        ]
    },
    details: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore amet voluptatibus iure consequatur ullam, 
        minus doloribus quam cupiditate quis, laborum, labore eum nihil debitis animi laboriosam dolor quod modi enim?
        Necessitatibus perspiciatis atque eaque quasi deleniti tempore fuga vel quo aliquam cumque ipsum, sint 
        illum unde nostrum minima repudiandae explicabo dolorem quae nihil magni porro culpa ea, eius eos? Cupiditate.
        Consequuntur vel maxime odit perspiciatis quia fugit dolore sequi, vitae molestias nam, eius eveniet alias 
        nesciunt blanditiis, animi amet repellat libero esse voluptatum earum accusantium facilis quibusdam culpa recusandae! Facilis?`
}