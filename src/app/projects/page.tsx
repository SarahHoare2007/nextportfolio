import styles from "@/app/projects/projects.module.css";
import React from 'react';
import Image from "next/image";
import projects from '@/assets/images/projects.svg';
import PROJECTS from "@/constants/projects";

export default function Projects() {

    const Gallery = () => {
        return (
            <div className={styles.gallerycontainer} >
                {PROJECTS.map((item) => (
                    <a key={item.id} className={styles.galleryitem} href={`/projects/${item.slug}`}>
                        <Image
                            src={item.src}
                            alt={item.alt}
                            width={item.width}
                            height={item.height}
                            className={styles.galleryimage}
                        />
                        <div className={styles.galleryover}>{item.alt}</div>
                    </a>
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

}
