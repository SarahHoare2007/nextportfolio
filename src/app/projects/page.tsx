import styles from "./projects.module.css";
import React from 'react';
import Image from "next/image";
import projects from '../../assets/images/projects.svg';
import fox from '../../assets/images/fox.png'
import design from '../../assets/images/whatisdesign.png'
import candle from '../../assets/images/candle.png'
import duck from '../../assets/images/duck.jpg'
import travel from '../../assets/images/Travel-poster.png'
import artnouveau from '../../assets/images/Artnouveau-poster.png'
import butterflies from '../../assets/images/butterflies.jpg'
import coffee from '../../assets/images/coffee.png'
import dancer from '../../assets/images/dancer.jpg'
import eye from '../../assets/images/eye.jpg'
import jellyfish from '../../assets/images/jellyfish.png'
import monogram from '../../assets/images/monogram.png'
import onepage from '../../assets/images/onepage.png'
import pattern from '../../assets/images/pattern.png'
import sketches from '../../assets/images/sketches.jpg'

export default function Projects() {

    const sections = [
        {
            id: "illustration",
            label: "Illustration",
            gallery: [
                {
                    src: fox,
                    width: 400,
                    height: 400,
                    alt: "My sexy fox",
                },
                {
                    src: jellyfish,
                    width: 400,
                    height: 400,
                    alt: "jellyfish illustration",
                },
                {
                    src: pattern,
                    width: 400,
                    height: 400,
                    alt: "marine creatures pattern",
                },
                {
                    src: monogram,
                    width: 400,
                    height: 400,
                    alt: "monogram illustration",
                },
                {
                    src: candle,
                    width: 400,
                    height: 400,
                    alt: "My candles on fire",
                }
            ],
        },
        {
            id: "posters",
            label: "Posters",
            gallery: [
                {
                    src: artnouveau,
                    width: 300,
                    height: 400,
                    alt: "art nouveau style poster",
                },
                {
                    src: design,
                    width: 300,
                    height: 400,
                    alt: "what is design poster",
                },
                {
                    src: travel,
                    width: 300,
                    height: 400,
                    alt: "travel poster",
                }
            ],
        },
        {
            id: "fineart",
            label: "FineArt",
            gallery: [
                {
                    src: duck,
                    width: 400,
                    height: 300,
                    alt: "My duck quacks",
                },
                {
                    src: sketches,
                    width: 300,
                    height: 400,
                    alt: "sketches",
                },
                {
                    src: butterflies,
                    width: 300,
                    height: 400,
                    alt: "scribblism butterflies",
                },
                {
                    src: dancer,
                    width: 300,
                    height: 400,
                    alt: "dancer painting",
                },
                {
                    src: eye,
                    width: 400,
                    height: 300,
                    alt: "mixed-media eye",
                }
            ],
        },
        {
            id: "branding",
            label: "Branding",
            gallery: [
                {
                    src: coffee,
                    width: 400,
                    height: 400,
                    alt: "coffee logo",
                },
                {
                    src: onepage,
                    width: 300,
                    height: 400,
                    alt: "branding one page",
                }
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
                        <div className={styles.circle}><a href={`#${section.id}`}> {section.label}</a></div>
                    )
                })}
            </div>

            {sections.map((section) => {
                return (
                    <div className={styles.section} id={section.id} key={section.id}>
                        <h2>{section.label}</h2>
                        <div className={styles.gallery}>
                            {section.gallery.map((image) => {
                                return (
                                    <Image className={styles.image}
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
