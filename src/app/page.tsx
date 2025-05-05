"use client";
import React from "react";
import styles from "./page.module.css";
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useRef } from 'react';
import MyLottieComponent from "@/components/animations/swiggle";
import HeartDraw from "@/components/animations/heart";
import ArrowDraw from "@/components/animations/arrow";

gsap.registerPlugin(ScrollTrigger)


export default function Home() {

  const mainRef = useRef();
  const imageRefs = useRef([]);
  const descRefs = useRef([]);

  const setRef = (ref: any, element: any) => {
    ref.current.push(element);
  };


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
      });

    },


    { scope: mainRef }


  );

  //projects start below fold. everything above spreads out



  return (
    <main className={styles.main}>

      <div className={styles.abovefold}>
        {/*} <Image className={styles.title}
          src={title}
          width={600}
          height={140}
          alt="Sarah Sioux Studios" />*/}
        <h1 className={styles.title}>Sarah Sioux Studios</h1>

        <div className={styles.swiggle}>
          <MyLottieComponent />
        </div>

        <div className={styles.skills}>
          <div className={styles.GD} ref={(e) => setRef(descRefs, e)}>Graphic Design</div>
          <div className={styles.IL} ref={(e) => setRef(descRefs, e)}>Illustration</div>
          <div className={styles.WD} ref={(e) => setRef(descRefs, e)}>Web Design</div>
        </div>

        <div className={styles.arrow}>
          <ArrowDraw />
        </div>
        <div className={styles.heart}>

          <HeartDraw />
        </div>
      </div>


    </main >
  );
}
