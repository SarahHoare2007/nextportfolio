
import styles from "@/app/projects/[slug]/slug.module.css";
import React from 'react';
import PROJECTS from "@/constants/projects";
import ProjectDisplay from "@/components/project";
import Footer from '@/components/footer';

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {

    const { slug } = await params;

    const project = PROJECTS.find((p) => p.slug === slug);

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 1,
        },
    };

    if (!project) {
        return null;
    }

    return (
        <main className={styles.main}>
            <ProjectDisplay project={project} />
            <Footer />
        </main >
    );
}
