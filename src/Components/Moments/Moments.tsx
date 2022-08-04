import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import { Moments as MomentType } from "../../Component/Lockscreen";
import styles from "./Moments.module.css";
import { MomentTile } from "./MomentTile";
import { onValue, ref } from "firebase/database";
import { database } from "../../firebase";

type Props = {
  title: string;
  toggleDrawer: (img: string) => void;
};

export const Moments: NextPage<Props> = ({ title, toggleDrawer }) => {
  const [moments, setMoments] = useState<MomentType[]>([]);

  const readMomentsData = () => {
    const momentsRef = ref(database, "moments");
    onValue(momentsRef, (snapshot) => {
      const data = snapshot.val();
      console.log("DATA", data);
      setMoments(data);
    });
  };

  useEffect(() => {
    readMomentsData();
  }, []);
  return (
    <div>
      <div className={styles.sub__heading}>{title}</div>
      <div className={styles.wrapper}>
        {Object.entries(moments)?.map(([key, value]) => (
          <MomentTile
            onclick={toggleDrawer}
            key={key}
            imgsrc={value.momentUrl}
            height={205}
            width={348}
            timestamp="Today"
            imgtitle={value.title ?? "Big Bang Theory"}
          />
        ))}
      </div>
    </div>
  );
};
