import pageStyles from "@/app/page.module.css";
import styles from "@/app/projects/[slug]/slug.module.css";
import React from 'react';
import Image from "next/image";
import PROJECTS from "@/constants/projects";

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {

    const { slug } = await params;

    const project = PROJECTS.find((p) => p.slug === slug);

    if (!project) {
        return null;
    }

    return (
        <main className={pageStyles.main}>
            <h1 className={styles.heading}>{project.alt}</h1>
            <div className={styles.format}>
                <div className={styles.arrow}></div>
                <Image className={styles.image} src={project.src} fill style={{ objectFit: "contain" }} alt={project.alt} />
                <p className={styles.text}> {project.desc}</p>
                <Image className={styles.imagex} src={project.src} fill style={{ objectFit: "contain" }} alt={project.alt} />
                <Image className={styles.imagex} src={project.src} fill style={{ objectFit: "contain" }} alt={project.alt} />
            </div>
        </main >
    );
}
