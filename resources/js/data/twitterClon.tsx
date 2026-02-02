import { ProjectType } from "@/types"
import { IconInertiaJs, IconLaravel, IconReact, IconTS } from '@/Components/Icons';
import twitter_01 from '@assets/projects/twitter_clone_01.webp';
import twitter_02 from '@assets/projects/twitter_clone_02.webp';
import twitter_03 from '@assets/projects/twitter_clone_03.webp';
import twitter_04 from '@assets/projects/twitter_clone_04.webp';
import twitter_05 from '@assets/projects/twitter_clone_05.webp';
import twitter_07 from '@assets/projects/twitter_clone_07.webp';
import twitter_08 from '@assets/projects/twitter_clone_08.webp';
import twitter_10 from '@assets/projects/twitter_clone_10.webp';
import twitter_11 from '@assets/projects/twitter_clone_11.webp';
import twitter_13 from '@assets/projects/twitter_clone_13.webp';

export const twitterClone: ProjectType = {
    title: 'Twitter Clone',
    github: 'https://github.com/Monsanto178/twitter-clone',
    deploy: '#',
    tecnologies: [
        {name: 'Laravel', icon: <IconLaravel color={false}/>},
        {name: 'React', icon: <IconReact color={false}/>},
        {name: 'TypeScript', icon: <IconTS color={false}/>},
        {name: 'Inertia.js', icon: <IconInertiaJs />}
    ],
    images: [
        twitter_01,
        twitter_02,
        twitter_03,
        twitter_04,
        twitter_05,
        twitter_07,
        twitter_08,
        twitter_10,
        twitter_11,
        twitter_13,
    ],
    description: {
        en:`Twitter clone developed as a practical exercise, using Laravel,
            React, TypeScript, and TailwindCSS for styling. The integration between the backend and frontend is handled through Inertia.js`,
        es: `Clon de Twitter desarrollado como parte de un ejercicio práctico, utilizando Laravel,
            React, TypeScript y TailwindCSS para los estilos. La integración entre el backend y el frontend se realiza a través de Inertia.js.` 
    },
    features: {
        es: [
            'Publicación de Posts: Los usuarios pueden crear y publicar posts, con la opción de adjuntar imágenes o vídeos',
            'Recorte de Imágenes: Utilizando la librería de JavaScript Fabric.js, se puede recortar imágenes antes de adjuntarlas a un post.',
            'Interacciones: Los usuarios pueden dar "Me Gusta" a los posts y ver las interacciones de otros usuarios.',
            'Marcadores: Los posts favoritos pueden ser guardados en una sección de marcadores, permitiendo un acceso rápido a ellos en cualquier momento.',
            'Perfil Personalizable: Cada usuario tiene un perfil donde puede ver sus publicaciones y reposts. También puede editar su foto de perfil, banner, nombre y biografía.',
            'Optimización: Para mejorar el rendimiento y evitar consultas innecesarias al servidor, se utiliza localStorage para almacenar los datos del perfil',
            'Diseño Responsivo: El diseño se adapta automáticamente a diferentes tamaños de pantalla.'
        ],
        en: [
            'Post Creation: Users can create and publish posts, with the option to attach images or videos.',
            'Image Cropping: Using the Fabric.js JavaScript library, users can crop images before attaching them to their posts.',
            'Likes: Users can "Like" posts and view interactions from other users.',
            'Bookmarks: Favorite posts can be saved in a bookmarks section for quick access at any time.',
            'Customizable Profile: Each user has a profile where they can view their posts and reposts. They can also edit their profile picture, banner, name, and bio.',
            'LocalStorage Optimization: To enhance performance and avoid unnecessary server requests, localStorage is used to store the current profile data, keeping the user session active without needing to reload the page',
            'Responsive Design: The design automatically adapts to different screen sizes.'
        ]
    },
    details: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore amet voluptatibus iure consequatur ullam, 
        minus doloribus quam cupiditate quis, laborum, labore eum nihil debitis animi laboriosam dolor quod modi enim?
        Necessitatibus perspiciatis atque eaque quasi deleniti tempore fuga vel quo aliquam cumque ipsum, sint 
        illum unde nostrum minima repudiandae explicabo dolorem quae nihil magni porro culpa ea, eius eos? Cupiditate.
        Consequuntur vel maxime odit perspiciatis quia fugit dolore sequi, vitae molestias nam, eius eveniet alias 
        nesciunt blanditiis, animi amet repellat libero esse voluptatum earum accusantium facilis quibusdam culpa recusandae! Facilis?`
}