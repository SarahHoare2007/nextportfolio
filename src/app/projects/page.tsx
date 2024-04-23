import styles from "./projects.module.css";
import React from 'react';
import Image from "next/image";
import projects from '../../assets/images/projects.svg';
import PhotoAlbum from "react-photo-album";
import fox from '../../assets/images/fox.png'
import design from '../../assets/images/whatisdesign.png'
import candle from '../../assets/images/candle.png'
import duck from '../../assets/images/duck.jpg'
import travel from '../../assets/images/Travel-poster.png'

{/*export default function Projects() {
    return (
        <main className={styles.main}>
            <Image className={styles.title}
                src={projects}
                width={432}
                height={174}
                alt="Projects" />

            <div className={styles.circles}>
                <div className={styles.circle1}>Illustration</div>
                <div className={styles.circle2}>Posters</div>
                <div className={styles.circle3}>Branding</div>
                <div className={styles.circle4}>Fine arts</div>
                <div className={styles.circle5}>Illustrator</div>
                <div className={styles.circle6}>Photoshop</div>
            </div>
        </main>
    );
}*/}

const Gallery = () => {
    let data = [
        {
            id: 1,
            imgSrc: fox,
        },
        {
            id: 2,
            imgSrc: design,
        }, {
            id: 3,
            imgSrc: duck,
        }, {
            id: 4,
            imgSrc: candle,
        }, {
            id: 5,
            imgSrc: travel,
        }
    ]
    return (
        <>

            <div className={styles.gallery}>
                {data.map((item, index) => {
                    return (
                        <div className={styles.pics} key={index}>
                            <img src={item.imgSrc} />
                        </div>
                    )

                })}
            </div>
        </>

    );
}

export default Gallery;