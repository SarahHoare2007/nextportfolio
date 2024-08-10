import styles from "./projects.module.css";
import React from 'react';
import Image from "next/image";
import projects from '../../assets/images/projects.svg';
import fox from '../../assets/images/fox.png'
import design from '../../assets/images/whatisdesign.png'
import duck from '../../assets/images/duck.jpg'
import travel from '../../assets/images/Travel-poster.png'
import artnouveau from '../../assets/images/Artnouveau-poster.png'
import butterflies from '../../assets/images/butterflies.jpg'
import watermelon from '../../assets/images/watermelon.png'
import dancer from '../../assets/images/dancer.jpg'
import eye from '../../assets/images/eye.jpg'
import monogram from '../../assets/images/monogram.png'
import businesspack from '../../assets/images/businesspackage.png'
import pattern from '../../assets/images/pattern.png'
import nomu from '../../assets/images/nomu.png'
import sketches from '../../assets/images/sketches.jpg'
import albumcover from '../../assets/images/albumcover.png'
import books from '../../assets/images/book covers.png'
import quote from '../../assets/images/quoteme.png'
import creativeinvention from '../../assets/images/creativeinvention.png'
import favtype from '../../assets/images/broadwayposter.png'
import explore from '../../assets/images/exploremagazine.png'
import recipe from '../../assets/images/recipe-card.png'

export default function Projects() {

    const sections = [
        {
            id: "illustration",
            label: "Illustration",
            gallery: [
                {
                    src: fox,
                    width: 250,
                    height: 250,
                    alt: "My sexy fox",
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
            label: "Posters",
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
            label: "Photoshop",
            gallery: [
                {
                    src: albumcover,
                    width: 250,
                    height: 250,
                    alt: "album cover",
                },
                {
                    src: books,
                    width: 250,
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
            label: "FineArt",
            gallery: [
                {
                    src: duck,
                    width: 250,
                    height: 187,
                    alt: "My duck quacks",
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
            label: "Branding",
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

    ]

    return (
        <main className={styles.main}>
            <Image className={styles.title}
                src={projects}
                width={432}
                height={174}
                alt="Projects" />

            <div className={styles.circles}>
                {/* <div className={styles.circle1}>Illustration</div>
                <div className={styles.circle2}>Posters</div>
                <div className={styles.circle3}>Branding</div>
                <div className={styles.circle4}>Fine arts</div>
                <div className={styles.circle5}>Illustrator</div>
                <div className={styles.circle6}>Photoshop</div> */}
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
}
