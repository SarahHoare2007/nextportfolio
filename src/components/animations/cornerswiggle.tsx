"use client";
import styles from "@/app/page.module.css";
import * as animationData from "@/assets/animations/swiggle corner.json";
import { useLottie } from "lottie-react";

const CornerSwiggle = () => {
    const defaultOptions = {
        animationData: animationData,
        loop: true,
        speed: 2,
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

export default CornerSwiggle;