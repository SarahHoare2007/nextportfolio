import pageStyles from "@/app/page.module.css";
import styles from "@/app/projects/[slug]/slug.module.css";
import React from 'react';
import Image from "next/image";
import PROJECTS from "@/constants/projects";
import Link from "next/link";
import YouTube from 'react-youtube';
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
        <main className={pageStyles.main}>
            <ProjectDisplay project={project} />
            <Footer />
        </main >
    );
}
