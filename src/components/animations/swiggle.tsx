"use client";
import styles from "@/app/page.module.css";
import * as animationData from "@/assets/animations/swiggleline.json";
import { useLottie } from "lottie-react";

const MyLottieComponent = () => {
  const defaultOptions = {
    animationData: animationData,
    loop: true,
  };

  const { View } = useLottie(defaultOptions);

  return (
    <>
     
     <div className={styles.animation}>
        <div className={styles.wfull}>{View}</div>
        </div>

    </>
  );
};

export default MyLottieComponent;