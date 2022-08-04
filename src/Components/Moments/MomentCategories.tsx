import { NextPage } from "next/types";
import React from "react";

import styles from "./Moments.module.css";
import { MomentTileCategories } from "./MomentTileCategories";

type Props = {
  title: string;
  images?: any[];
  onclick: (img: string) => void;
};

export const MomentsCategories: NextPage<Props> = ({
  title,
  images,
  onclick,
}) => {
  return (
    <div>
      <div className={styles.sub__heading}>{title}</div>
      <div
        style={{
          display: "flex",
          overflow: "scroll",
        }}
      >
        {images?.map((image, index) => (
          <MomentTileCategories
            onclick={onclick}
            imgsrc={image.src}
            height={135}
            width={240}
            timestamp={image.timestamp}
            imgtitle="Witcher"
            key={`${image}${index}`}
          />
        ))}
      </div>
    </div>
  );
};
