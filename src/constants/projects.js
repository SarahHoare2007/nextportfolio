import fox from '@/assets/images/fox.png'
import design from '@/assets/images/whatisdesign.png'
import duck from '@/assets/images/duck.jpg'
import travel from '@/assets/images/Travel-poster.png'
import butterflies from '@/assets/images/butterflies.jpg'
import watermelon from '@/assets/images/watermelon.png'
import dancer from '@/assets/images/dancer.jpg'
import monogram from '@/assets/images/monogram.png'
import businesspack from '@/assets/images/businesspackage.png'
import pattern from '@/assets/images/pattern.png'
import nomu from '@/assets/images/nomu.png'
import albumcover from '@/assets/images/albumcover.png'
import books from '@/assets/images/book covers.png'
import quote from '@/assets/images/quoteme.png'
import creativeinvention from '@/assets/images/creativeinvention.png'
import favtype from '@/assets/images/broadwayposter.png'
import explore from '@/assets/images/exploremagazine.png'
import recipe from '@/assets/images/recipe-card.png'
import wrappinglte from '@/assets/images/wrappingpaper_light.png'
import wrappingdrk from '@/assets/images/wrappingpaper_dark.png'
import wrappingpg from '@/assets/images/wrappingpaper_page.png'
import rapptor from '@/assets/images/rapptor_page.png'
import iceburg from '@/assets/images/iceburgpg.png'

const PROJECTS = [
    {
        id: 1, slug: "wrapper-paper",
        src: [wrappingpg, wrappinglte, wrappingdrk],
        alt: 'Wrapping Paper',
        desc: 'This wrapping paper was designed for a contest hosted by Premier Press and was selected as one of the three finalists. It was printed and distributed by Premier Press.'
    },
    { id: 2, slug: "iceburg-icecream", src: iceburg, width: 250, height: 200, alt: 'IceBurg IceCream', desc: 'hello world' },
    { id: 3, slug: "fox", src: fox, width: 250, height: 250, alt: 'Fox Illustration', desc: 'hello world' },
    { id: 4, slug: "marine-pattern", src: pattern, width: 250, height: 250, alt: 'Marine Creatures Pattern', desc: 'hello world' },
    { id: 5, slug: "monogram", src: monogram, width: 250, height: 250, alt: 'Monogram Illustration', desc: 'hello world' },
    { id: 6, slug: "watermelon", src: watermelon, width: 250, height: 250, alt: 'Watermelon Illustration' },
    { id: 7, slug: "book-covers", src: books, width: 250, height: 200, alt: 'Book Covers' },
    { id: 8, slug: "album-cover", src: albumcover, width: 250, height: 250, alt: 'Song Album Cover' },
    { id: 9, slug: "quote-me", src: quote, width: 200, height: 250, alt: 'Quote Poster' },
    { id: 10, slug: "nomu", src: nomu, width: 250, height: 250, alt: 'Nomu Logo' },
    { id: 11, slug: "explore-magazine", src: explore, width: 200, height: 250, alt: 'Explore Magazine Cover' },
    { id: 12, slug: "what-is-design", src: design, width: 200, height: 250, alt: 'What Is Design' },
    { id: 13, slug: "recipe-card", src: recipe, width: 250, height: 200, alt: 'Recipe Card' },
    { id: 14, slug: "favorite-type", src: favtype, width: 200, height: 250, alt: 'Favorite Type Poster' },
    { id: 15, slug: "reset-ads", src: creativeinvention, width: 200, height: 250, alt: 'Reset Headset Ads' },
    { id: 16, slug: "business-package", src: businesspack, width: 200, height: 250, alt: 'Business Package' },
    { id: 17, slug: "travel-poster", src: travel, width: 200, height: 250, alt: 'Travel Poster' },
    { id: 18, slug: "dancer", src: dancer, width: 200, height: 250, alt: 'Dancer Painting' },
    { id: 19, slug: "butterflies", src: butterflies, width: 200, height: 250, alt: 'Ink Butterflies' },
    { id: 20, slug: "duck", src: duck, width: 250, height: 200, alt: 'Ink Duck' },
    { id: 21, slug: "rapptor", src: rapptor, width: 250, height: 250, alt: 'rapptor' },
];

export default PROJECTS;