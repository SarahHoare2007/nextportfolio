import Image, { StaticImageData } from 'next/image';
import fox from '@/assets/images/fox.png'
import design from '@/assets/images/whatisdesign.png'
import duck from '@/assets/images/duck.jpg'
import butterflies from '@/assets/images/butterflies.jpg'
import preflight from '@/assets/images/prefight.png'
import sfff from '@/assets/images/sfff.png'
import inlander from '@/assets/images/inlander.png'
import animationpage from '@/assets/images/animationpage.png'
import pattern from '@/assets/images/pattern.png'
import nomu from '@/assets/images/nomu.png'
import albumcover from '@/assets/images/albumcover.png'
import books from '@/assets/images/book covers.png'
import book1 from '@/assets/images/book cover1.png'
import book2 from '@/assets/images/book cover 2.png'
import book3 from '@/assets/images/book cover 3.png'
import quote from '@/assets/images/quoteme.png'
import favtype from '@/assets/images/broadwayposter.png'
import explore from '@/assets/images/exploremagazine.png'
import wrappinglte from '@/assets/images/wrappingpaper_light.png'
import wrappingdrk from '@/assets/images/wrappingpaper_dark.png'
import wrappingpg from '@/assets/images/wrappingpaper_page.png'
import rapptor from '@/assets/images/rapptor_page.png'
import iceburg from '@/assets/images/iceburgpg.png'
import heart from '@/assets/images/porcelainheart.png'
import iceadone from '@/assets/images/iceburgad-one.png'
import iceadall from '@/assets/images/iceburgad-all.png'
import inlandermag from '@/assets/images/inlander-fullpage.jpg'

interface Image {
    src: StaticImageData;
    alt: string;
    width?: number;
    height?: number;
}

export interface Project {
    id: number;
    slug: string;
    src: StaticImageData;
    alt: string;
    video?: string;
    images?: Image[];
    desc?: string;
    width?: number;
    height?: number;
}

const PROJECTS: Project[] = [
    {
        id: 1,
        slug: "wrapper-paper",
        src: wrappingpg,
        alt: 'Wrapping Paper Design',
        images: [
            { src: wrappingpg, width: 250, height: 200, alt: 'paper' },
            { src: wrappinglte, width: 200, height: 250, alt: 'paper2' },
            { src: wrappingdrk, width: 200, height: 250, alt: 'paper3' }
        ],
        desc: 'This wrapping paper was designed for a contest hosted by Premier Press and was selected as one of the three finalists. It was printed and distributed by Premier Press.'
    },
    {
        id: 2, slug: "iceburg-icecream", src: iceburg,
        alt: 'Ice Cream Brand Design',
        images: [
            { src: iceburg, width: 300, height: 200, alt: 'IceBurg IceCream' },
            { src: iceadone, width: 200, height: 250, alt: 'IceBurg IceCream Single Ad' },
            { src: iceadall, width: 200, height: 250, alt: 'IceBurg IceCream Full Ad' },
        ],
        desc: 'This is a design package I created for a fictional IceCream brand. It started out as a label design, and ended with newsletter layouts, magazine layouts, and a website design. This campaign was awarded a Silver Addy at the AAF Spokane American Advertising Awards in 2025, as well as third place in the highschool student graphic design SCAD challenge in 2025.'
    },
    {
        id: 3, slug: "inlander", src: inlander, alt: 'Inlander',
        images: [
            { src: inlander, width: 250, height: 250, alt: 'Inlander Design' },
            { src: inlandermag, width: 230, height: 250, alt: 'Printed inlander magazine' }
        ],
        desc: 'I made this magazine cover in Adobe Photoshop for the Inlander Newspaper as a cover for their 2025 summer camps section.'
    },
    {
        id: 4, slug: "rapptor", src: rapptor,
        width: 250, height: 250, alt: 'rapptor'
    },
    {
        id: 5, slug: "stopmotion-animation",
        video: "T2bJHte5nSo",
        src: animationpage,
        width: 200, height: 250, alt: 'Stopmotion Animation',
        desc: 'I made this animation for The Blissful Whisk to use for marketing. I need to link the animation here.'
    },
    {
        id: 6, slug: "heart", src: heart,
        width: 250, height: 250, alt: 'heart'
    },
    {
        id: 7, slug: "preflight", src: preflight,
        width: 250, height: 250, alt: 'Preflight poster'
    },
    {
        id: 8, slug: "book-covers", src: books, alt: 'books',
        images: [
            { src: book1, width: 250, height: 200, alt: 'Book Covers' },
            { src: book2, width: 250, height: 200, alt: 'Book Covers' },
            { src: book3, width: 250, height: 200, alt: 'Book Covers' }],
        desc: 'books'
    },
    {
        id: 9, slug: "album-cover", src: albumcover,
        width: 250, height: 250, alt: 'Song Album Cover'
    },
    {
        id: 10, slug: "nomu", src: nomu,
        width: 250, height: 250, alt: 'Nomu Logo'
    },
    {
        id: 11, slug: "explore-magazine", src: explore,
        width: 200, height: 250, alt: 'Explore Magazine Cover'
    },
    {
        id: 12, slug: "what-is-design", src: design,
        width: 200, height: 250, alt: 'What Is Design'
    },
    {
        id: 13, slug: "quote-me", src: quote,
        width: 200, height: 250, alt: 'Quote Poster',
        desc: 'This wrapping paper was designed for a contest hosted by Premier Press and was selected as one of the three finalists. It was printed and distributed by Premier Press.'
    },
    {
        id: 14, slug: "favorite-type", src: favtype,
        width: 200, height: 250, alt: 'Favorite Type Poster'
    },
    {
        id: 15, slug: "fall-folk-festival", src: sfff,
        width: 200, height: 250, alt: 'Spokane Fall Folk Festival poster',
        desc: 'This is my poster submission for the Spokane Fall Folk Festival annual design contest. '
    },
    {
        id: 16, slug: "scribblism", src: duck, alt: 'scibblism',
        images: [
            { src: butterflies, width: 200, height: 250, alt: 'Ink Butterflies' },
        ],
        desc: 'These are some of my fine art pieces that I have locally sold at fairs and markets.'
    },
    {
        id: 17, slug: "fox", src: fox,
        alt: 'Fox Illustration',
        desc: 'This illustration was one of my first projects I made with Adobe Illustrator. The project was to illustrate any animal in any style to practice the tools of illustrator.'
    },
    {
        id: 18, slug: "marine-pattern", src: pattern,
        width: 250, height: 250, alt: 'Marine Creatures Pattern',
        desc: 'This illustrated repeating pattern was one of my early projects I made in Adobe Illustrator. My goal with this was to make the illustrations feel like they were watercolors, so I played with lots of organic shapes and a variety of colors.'
    },
];

export default PROJECTS;