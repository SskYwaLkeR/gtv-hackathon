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

export const MomentTileCategories: NextPage<Props> = ({
  imgsrc,
  height,
  width,
  imgtitle,
  timestamp,
  onclick,
}) => {
  return (
    <div
      className={styles.moment_tile_container}
      style={{
        backgroundImage: `url(${imgsrc})`,
        width,
        height,
        margin: "10px 15px",
        backgroundSize: "cover",
      }}
      onClick={() => onclick(imgsrc)}
    >
      <div
        className={styles.moment_img_fade}
        style={{
          height,
          width,
        }}
      />
      <div className={styles.moment_data_cat}>
        <div className={styles.imgtitle}>{imgtitle}</div>
        <div className={styles.imgtimestamp}>{timestamp}</div>
      </div>
    </div>
  );
};
