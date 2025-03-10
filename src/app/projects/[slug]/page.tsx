import styles from "@/app/projects/projects.module.css";
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
        <div className={styles.main}>
            {project.alt}
            <Image src={project.src} fill style={{ objectFit: "contain" }} alt={project.alt} />
        </div>
    );
}
