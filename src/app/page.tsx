"use client";
import Image from "next/image";
import styles from "./page.module.css";
import watermelon from '../assets/images/watermelon.png';
import duck from '../assets/images/duck.jpg'
import album from '../assets/images/albumcover.png';
import title from '../assets/images/mainheading.svg';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useRef } from 'react';
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger)


export default function Home() {
  const mainRef = useRef();
  const imageRefs = useRef([]);
  const descRefs = useRef([]);

  const setRef = (ref: any, element: any) => {
    ref.current.push(element);
  }

  useGSAP(
    () => {
      imageRefs?.current?.forEach((img, index) => {
        const even = index % 2 == 0;
        gsap.from(img, {
          x: even ? -300 : 300,
          opacity: 0,
          scrollTrigger: {
            trigger: img,
            start: 'bottom bottom',
            end: 'top 10%',
            scrub: 1,
          //  markers: true,
          },
        });
      })

      descRefs?.current?.forEach((desc, index) => {
        gsap.to(desc, {
          x: 0,
          opacity: 1,
          delay: index * .2,
          // scrollTrigger: {
          //   trigger: desc,
          //   start: 'top bottom',
          //   //end: 'top 20%',
          //   scrub: true,
         // markers: true,
          // },
        });
      })

    },
    { scope: mainRef }
  );

  //projects start below fold. everything above spreads out

  return (
    <main className={styles.main}>

      <div className={styles.abovefold}>
        <Image className={styles.title}
          src={title}
          width={600}
          height={140}
          alt="Sarah Sioux Studios" />


        <div className={styles.skills}>
          <div className={styles.GD} ref={(e) => setRef(descRefs, e)}>Graphic Design</div>
          <div className={styles.IL} ref={(e) => setRef(descRefs, e)}>Illustration</div>
          <div className={styles.WD} ref={(e) => setRef(descRefs, e)}>Web Design</div>
        </div>

      </div>

      <div className={styles.griditem}>
        <Link href="/projects#graphic-illustrations">
          <div className={styles.square}><Image
            ref={(e) => setRef(imageRefs, e)}
            src={album}
            width={300}
            height={300}
            alt="album cover"
          /></div>
        </Link>
        <Link href="/projects#graphic-illustrations" className={styles.section}>Illustrations</Link>
        <p>I have created many illustrations for a variety of uses. Add more words here.</p>
      </div>

      <div className={styles.griditem}>
        <Link href="/projects#graphic-design">
          <div className={styles.square}>
            <Image
              ref={(e) => setRef(imageRefs, e)}
              src={watermelon}
              width={300}
              height={300}
              alt="watermelon illustration"
            /></div>
        </Link>
        <div className={styles.description}>
          <Link href="/projects#graphic-design" className={styles.section}>Brand Identity</Link>
          <p>I enjoy creating logos, refining designs, and putting together brand packages.</p></div>
      </div>

      <div className={styles.griditem}>
        <div className={styles.square}> <Image
          src={duck}
          ref={(e) => setRef(imageRefs, e)}
          width={400}
          height={300}
          alt="Ink Duck"
        />
        </div>
        <Link href="/projects#fineart" className={styles.section}>Fine Arts</Link>
        <p>In my free time I work on many types of fine arts.</p>
      </div>

    </main >
  );
}
