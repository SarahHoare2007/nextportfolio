import Image, { StaticImageData } from 'next/image';
import design from '@/assets/images/whatisdesign.png'
import duck from '@/assets/images/duck.jpg'
import butterflies from '@/assets/images/butterflies.jpg'
import preflight from '@/assets/images/prefight.png'
import sfff from '@/assets/images/sfff.png'
import inlander from '@/assets/images/inlander.png'
import animationpage from '@/assets/images/animationpage.png'
import nomu from '@/assets/images/nomu.png'
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
import pointeshoe from '@/assets/images/hoare_sarah_pointe.jpg'
import dragonfly from '@/assets/images/dragonfly.jpg'
import glass from '@/assets/images/pencilglass.jpg'
import turtle from '@/assets/images/turtle.jpg'
import leafhand from '@/assets/images/leafhand.jpg'
import portrait from '@/assets/images/char_portrait.jpg'
import turtlemural from '@/assets/images/turtle.png' 
import octopus from '@/assets/images/octopus.png' 
import pandas from '@/assets/images/pandamural.png' 
import keyhole from '@/assets/images/keyhole.png'

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
        id: 2,
        slug: "murals",
        src: pandas,
        alt: 'Mural work ',
        images: [
            { src: turtlemural, width: 200, height: 250, alt: 'closet door' },
            { src: octopus, width: 250, height: 200, alt: 'small doorframe mural' },
            { src: keyhole, width: 200, height: 250, alt: 'keyhole painting' },
            { src: pandas, width: 250, height: 200, alt: 'large panda mural' }
        ],
        desc: 'These are some of the murals I have done between 2022 and now. I have completed murals that ranged from about 2x1 feet, to over 8x5 feet, and I plan to move onto larger pieces in the future. I have completed murals for childrens bedrooms (such as the turtle and octopus shown below), family rooms (the panda scene), and office spaces (key hole). Most of my work I do directly on a wall, but I have done some on large canvas, wood panels, and even once on a home-use carousel (unfortunately, those photographs are not available to share). My favorite subjects to paint are animals, but I love to work on anything. '
    },
    {
        id: 3, slug: "iceburg-icecream", src: iceburg,
        alt: 'Ice Cream Brand Design',
        images: [
            { src: iceburg, width: 300, height: 200, alt: 'IceBurg IceCream' },
            { src: iceadone, width: 200, height: 250, alt: 'IceBurg IceCream Single Ad' },
            { src: iceadall, width: 200, height: 250, alt: 'IceBurg IceCream Full Ad' },
        ],
        desc: 'This is a design package I created for a fictional IceCream brand. It started out as a label design, and ended with newsletter layouts, magazine layouts, and a website design. This campaign was awarded a Silver Addy at the AAF Spokane American Advertising Awards in 2025, as well as third place in the highschool student graphic design SCAD challenge in 2025.'
    },
    {
        id: 4, slug: "inlander", src: inlander, alt: 'Inlander',
        images: [
            { src: inlander, width: 250, height: 250, alt: 'Inlander Design' },
            { src: inlandermag, width: 230, height: 250, alt: 'Printed inlander magazine' }
        ],
        desc: 'I made this magazine cover in Adobe Photoshop for the Inlander Newspaper as a cover for their 2025 summer camps section.'
    },
    {
        id: 5, slug: "logos", src: nomu, alt: 'Logos',
        images: [
            { src: rapptor, width: 250, height: 250, alt: 'rapptor' },
            { src: nomu, width: 250, height: 250, alt: 'nomu' },],
        desc: 'Some logo design projects I have done'
    },
    {
        id: 6, slug: "stopmotion-animation",
        video: "T2bJHte5nSo",
        src: animationpage,
        width: 200, height: 250, alt: 'Stopmotion Animation',
        desc: 'I made this animation for The Blissful Whisk to use for marketing. I need to link the animation here.'
    },
    {
        id: 7, slug: "heart", src: heart,
        width: 250, height: 250, alt: 'heart'
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
        id: 10, slug: "posters", src: sfff, alt: 'Informative posters',
        images: [
            { src: explore, width: 200, height: 250, alt: 'Explore Magazine' },
            { src: sfff, width: 200, height: 250, alt: 'Spokane Fall Folk Festival poster' },
            { src: preflight, width: 200, height: 250, alt: 'Preflight Poster' },
        ],
            
        desc: 'These are some posters I completed throughout my Graphic Design coursework.'
    },
     {
        id: 11, slug: "fine-arts", src: pointeshoe, alt: 'Fine Art',
        images: [
            { src: portrait, width: 200, height: 250, alt: 'Pencil Portrait' },
            { src: glass, width: 250, height: 200, alt: 'Pencil Glass' },
            { src: dragonfly, width: 250, height: 200, alt: 'Ink DragonFly' },
            { src: pointeshoe, width: 250, height: 200, alt: 'Arcrylic Pointe Shoe' },
            { src: leafhand, width: 250, height: 200, alt: 'Gouache Leaf and Hand' }],
            
        desc: 'These are some of my fine arts pieces. I have experimented in a wide array of mediums are materials to draw and paint on, inluding canvases, walls, clothes, and wood.'
    },
    {
        id: 12, slug: "type-posters", src: quote, alt: 'Typographic Posters',
        images: [
            { src: design, width: 200, height: 250, alt: 'What Is Design' },
            { src: quote, width: 200, height: 250, alt: 'Quote Poster' },
            { src: favtype, width: 200, height: 250, alt: 'Favorite Type Poster' },
        ],
            
        desc: 'These are some typographic posters I completed for a typography class as part of my Graphic Design coursework.'
    },
    {
        id: 16, slug: "scribblism", src: duck, alt: 'scibblism',
        images: [
            { src: butterflies, width: 200, height: 250, alt: 'Ink Butterflies' },
            { src: turtle, width: 200, height: 250, alt: 'Turtle sketch' },
            { src: duck, width: 200, height: 250, alt: 'Duck Skecth' },
        ],
        desc: 'These are some of my scribblism pieces that I have locally sold at fairs and markets.'
    },
   
];

export default PROJECTS;