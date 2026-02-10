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
        es: `Este proyecto utiliza la API no oficial de Jikan para mostrar una amplia variedad de manga, novelas y obras relacionadas de MyAnimeList. 
            Los usuarios pueden explorar títulos populares, recientes y recomendados, así como buscar y filtrar resultados por tipo y estado.
            La plataforma también incluye reseñas de usuarios de MyAnimeList, y proporciona páginas detalladas con información sobre personajes, autores y obras relacionadas.
            Finalmente, dispone de un diseño responsivo que se adapta a cualquier dispositivo.`,
            
        en: `This project uses the unofficial Jikan API to showcase a wide variety of manga, novels, and related works from MyAnimeList. Users can 
            browse popular, recent, and recommended titles, as well as search and filter results by type and status. The platform also includes user 
            reviews from MyAnimeList, and provides detailed pages with information on characters, authors, and related works.
            Finally, it has a responsive design capable of adapting to any device.`
    },
    features: {
        es: [
            'Visualización de mangas: Se pueden explorar las obras más populares, recientes, recomendadas y destacadas.',
            'Búsqueda y filtrado avanzado: Permite buscar mangas específicos y filtrar los resultados por tipo de obra y estado.',
            'Reseñas de usuarios: Se integra una sección para mostrar las reseñas más recientes de usuarios de MyAnimeList.',
            'Información detallada: Cada manga cuenta con una página de detalles que incluye datos relevantes como personajes, obras relacionadas, autores y reseñas de otros usuarios.',
            'Diseño responsivo: El sitio está optimizado para ofrecer una experiencia fluida y adaptativa en diferentes dispositivos.'
        ],
        en: [
            'Manga Viewing: Users can explore the most popular, recent, recommended, and featured works.',
            'Advanced Search and Filtering: Users can search for specific mangas and filter results by type of work and status.',
            'User Reviews: A section that displays the most recent user reviews from MyAnimeList.',
            'Detailed Information: Each manga has a detailed page containing relevant information such as characters, related works, authors, and user reviews.',
            'Responsive Design: The platform is optimized to provide a smooth and adaptive experience across various devices.'
        ]
    },
    details: ``
}