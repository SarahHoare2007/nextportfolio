import styles from "./projects.module.css";
import React from 'react';
import Image from "next/image";
import projects from '../../assets/images/projects.svg';
import fox from '../../assets/images/fox.png'
import design from '../../assets/images/whatisdesign.png'
import duck from '../../assets/images/duck.jpg'
import travel from '../../assets/images/Travel-poster.png'
import butterflies from '../../assets/images/butterflies.jpg'
import watermelon from '../../assets/images/watermelon.png'
import dancer from '../../assets/images/dancer.jpg'
import monogram from '../../assets/images/monogram.png'
import businesspack from '../../assets/images/businesspackage.png'
import pattern from '../../assets/images/pattern.png'
import nomu from '../../assets/images/nomu.png'
import albumcover from '../../assets/images/albumcover.png'
import books from '../../assets/images/book covers.png'
import quote from '../../assets/images/quoteme.png'
import creativeinvention from '../../assets/images/creativeinvention.png'
import favtype from '../../assets/images/broadwayposter.png'
import explore from '../../assets/images/exploremagazine.png'
import recipe from '../../assets/images/recipe-card.png'
import wrappinglte from '../../assets/images/wrappingpaper_light.png'
import wrappingdrk from '../../assets/images/wrappingpaper_dark.png'
import wrappingpg from '../../assets/images/wrappingpaper_page.png'
import rapptor from '../../assets/images/rapptor_page.png'
import iceburg from '../../assets/images/iceburgpg.png'

export default function Projects() {

    const gallery = [
        { id: 1, src: wrappingpg,  alt: 'Wrapping Paper' },
        { id: 2, src: iceburg,  alt: 'IceBurg IceCream' },
        { id: 3, src: fox, alt: 'Fox Illustration' },
        { id: 4, src: pattern, alt: 'Marine Creatures Pattern' },
        { id: 5, src: monogram, alt: 'Monogram Illustration' },
        { id: 6, src: watermelon, alt: 'Watermelon Illustration' },
        { id: 7, src: books, alt: 'Book Covers' },
        { id: 8, src: albumcover, alt: 'Song Album Cover' },
        { id: 9, src: quote, alt: 'Quote Poster' },
        { id: 10, src: nomu, alt: 'Nomu Logo' },
        { id: 11, src: explore, alt: 'Explore Magazine Cover' },
        { id: 12, src: design, alt: 'What Is Design' },
        { id: 13, src: recipe, alt: 'Recipe Card' },
        { id: 14, src: favtype, alt: 'Favorite Type Poster' },
        { id: 15, src: creativeinvention, alt: 'Reset Headset Ads' },
        { id: 16, src: businesspack, alt: 'Business Package' },
        { id: 17, src: travel, alt: 'Travel Poster' },
        { id: 18, src: dancer, alt: 'Dancer Painting' },
        { id: 19, src: butterflies, alt: 'Ink Butterflies' },
        { id: 20, src: duck, alt: 'Ink Duck' },
        { id: 21, src: rapptor, alt: 'rapptor' },
    ];

    const Gallery = () => {
        return (
            <div className={styles.gallerycontainer} >
                {gallery.map((item) => (
                    <div key={item.id} className={styles.galleryitem}>
                        <Image
                            src={item.src}
                            alt={item.alt}
                            width={250}
                            height={250}
                            className={styles.galleryimage}
                        />
                         <div className={styles.galleryover}>{item.alt}</div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className={styles.main}>
             <Image className={styles.title}
                src={projects}
                width={300}
                height={100}
                alt="Projects" />

            <Gallery />
        </div>
    );
    



   /* const sections = [
        {
            id: "illustration",
            gallery: [
                {
                    src: wrappinglte,
                    width: 187,
                    height: 250,
                    alt: "light wrapping paper",
                },  {
                    src: wrappingdrk,
                    width: 187,
                    height: 250,
                    alt: "dark wrapping paper",
                },  {
                    src: wrappingpg,
                    width: 320,
                    height: 217,
                    alt: "wrapping paper",
                },
                {
                    src: fox,
                    width: 250,
                    height: 250,
                    alt: "fox illustration",
                },
                {
                    src: pattern,
                    width: 250,
                    height: 250,
                    alt: "marine creatures pattern",
                },
                {
                    src: monogram,
                    width: 250,
                    height: 250,
                    alt: "monogram illustration",
                },
                {
                src: watermelon,
                    width: 250,
                    height: 250,
                    alt: "watermelon illustration",
                },
                {
                    src: recipe,
                    width: 250,
                    height: 187,
                    alt: "recipe card",
                },
            ],
        },
        {
            id: "posters",
            gallery: [
                {
                    src: artnouveau,
                    width: 187,
                    height: 250,
                    alt: "art nouveau style poster",
                },
                {
                    src: design,
                    width: 187,
                    height: 250,
                    alt: "what is design poster",
                },
                {
                    src: quote,
                    width: 187,
                    height: 250,
                    alt: "quote me poster",
                },
                {
                    src: favtype,
                    width: 187,
                    height: 250,
                    alt: "favorite type poster",
                },
                {
                    src: travel,
                    width: 187,
                    height: 250,
                    alt: "travel poster",
                }
            ],
        },
        {
            id: "photoshop",
            gallery: [
                {
                    src: albumcover,
                    width: 250,
                    height: 250,
                    alt: "album cover",
                },
                {
                    src: books,
                    width: 260,
                    height: 187,
                    alt: "book covers",
                },
                {
                    src: explore,
                    width: 187,
                    height: 250,
                    alt: "explore magazine",
                },
                {
                    src: creativeinvention,
                    width: 187,
                    height: 250,
                    alt: "creative invention",
                },
            ]
        },
        {
            id: "fineart",
            gallery: [
                {
                    src: duck,
                    width: 250,
                    height: 187,
                    alt: "scribblism duck",
                },
                {
                    src: sketches,
                    width: 187,
                    height: 250,
                    alt: "sketches",
                },
                {
                    src: butterflies,
                    width: 187,
                    height: 250,
                    alt: "scribblism butterflies",
                },
                {
                    src: dancer,
                    width: 187,
                    height: 250,
                    alt: "dancer painting",
                },
                {
                    src: eye,
                    width: 250,
                    height: 187,
                    alt: "mixed-media eye",
                }
            ],
        },
        {
            id: "branding",
            gallery: [
                {
                    src: nomu,
                    width: 250,
                    height: 250,
                    alt: "nomu logo",
                },
                {
                    src: businesspack,
                    width: 250,
                    height: 187,
                    alt: "personal business package",
                },
            ],
        },

    ]*/
/*
    return (
        <main className={styles.main}>
            <Image className={styles.title}
                src={projects}
                width={432}
                height={174}
                alt="Projects" />

            <div className={styles.circles}>
               
                {sections.map((section) => {
                    return (
                        <div key={`menu-item-${section.id}`} className={styles.circle}><a href={`#${section.id}`}> {section.label}</a></div>
                    )
                })}
            </div>

            {sections.map((section) => {
                return (
                    <div className={styles.section} key={`section-${section.id}`}>
                        <h2 id={section.id}>{section.label}</h2>
                        <div className={styles.gallery}>
                            {section.gallery.map((image, index) => {
                                return (
                                    <Image key={`image-${section.id}-${index}`} className={styles.image}
                                        src={image.src}
                                        width={image.width}
                                        height={image.height}
                                        alt={image.alt} />
                                )
                            })}
                        </div>
                    </div>
                )
            })}


        </main>
        
    );
    */
}
