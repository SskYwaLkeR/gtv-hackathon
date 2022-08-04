/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import React from "react";

import styles from "./Moments.module.css";

type Props = {
  imgsrc: string;
  imgtitle: string;
  timestamp: string;
  height: number;
  width: number;
  onclick: (img: string) => void;
};

export const MomentTile: NextPage<Props> = ({
  imgsrc,
  height,
  width,
  imgtitle,
  timestamp,
  onclick,
}) => {
  return (
    <div
      onClick={() => onclick(imgsrc)}
      className={styles.moment_tile_container}
      style={{
        backgroundImage: `url(${imgsrc})`,
        width,
        height,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div
        className={styles.moment_img_fade}
        style={{
          height,
          width,
        }}
      />
      <div className={styles.moment_data}>
        <div className={styles.imgtitle}>{imgtitle}</div>
        <div className={styles.imgtimestamp}>{timestamp}</div>
      </div>
    </div>
  );
};
