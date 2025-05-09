"use client";

import Image from "next/image";
import styles from "@/app/projects/[slug]/slug.module.css";
import React from 'react';
import Link from "next/link";
import YouTube from 'react-youtube';
import { Project } from "@/constants/projects";
import { Gallery, Item } from 'react-photoswipe-gallery'

interface ProjectProps {
    project: Project;
}

const ProjectDisplay = ({ project }: ProjectProps) => {
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    return (
        <>
            <h1 className={styles.heading}>{project.alt}</h1>
            <div className={styles.format}>
                <Link href={"./"}><div className={styles.arrow}></div></Link>
                {project.video ?
                    (
                        <YouTube videoId={project.video} opts={opts} />
                    ) : (
                        <Image className={styles.image} src={project.src} fill style={{ objectFit: "contain" }} alt={project.alt} />
                    )
                }
                <p className={styles.text}> {project.desc}</p>


            </div>
            <Gallery>
                <div className={styles.projectImages}>
                    {project?.images?.length ? project.images.map((image, index) => {
                        return (
                            <Item
                                key={`${project.id}-item-${index}`}
                                original={image.src.src}
                                thumbnail={image.src.src}
                                width="1024"
                                height="768"
                            >
                                {({ ref, open }) => (
                                    <Image
                                        ref={ref}
                                        onClick={open}
                                        src={image.src.src}
                                        width={image.width}
                                        height={image.height}
                                        alt={image.alt}
                                        style={{ objectFit: "contain" }}
                                    />
                                )}
                            </Item>
                        )

                    }) : null}
                </div>
            </Gallery>
        </>
    )

}





{/*
interface ProjectProps {
    project: Project;
}

const ProjectDisplay = ({ project }: ProjectProps) => {
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    

    return (
        <>
            <h1 className={styles.heading}>{project.alt}</h1>
            <div className={styles.format}>
                <Link href={"../"}><div className={styles.arrow}></div></Link>
                {project.video ?
                    (
                        <YouTube videoId={project.video} opts={opts} />
                    ) : (
                        <Image className={styles.image} src={project.src} fill style={{ objectFit: "contain" }} alt={project.alt} />
                    )
                }
                <p className={styles.text}> {project.desc}</p>


            </div>
            <div className={styles.projectImages}>
                {project?.images?.map((image, index) => {

                    return (
                        <div key={`image-${index}`} className={styles.projectImage}>
                            <Image
                                src={image.src}
                                alt={image.alt}
                                width={image.width}
                                height={image.height}
                            />
                        </div>
                    )
                })}
            </div>
        </>
    )
}
*/}
export default ProjectDisplay;