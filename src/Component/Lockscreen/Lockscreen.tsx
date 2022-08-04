import s from "./Lockscreen.module.css";
import { onValue, ref, set } from "firebase/database";
import { database } from "../../firebase";
import { useEffect, useState } from "react";

export type Moments = {
  title: string;
  momentUrl: string;
  timestamp: string;
  source: string;
  id: string;
};

const date = new Date();

export const Lockscreen = () => {
  const [moments, setMoments] = useState<Moments>();

  const writeMomentsData = (data: Moments) => {
    const { title, timestamp, momentUrl, source } = data;
    set(ref(database, "moments"), {
      id: "abc-123-xyz",
      title,
      momentUrl,
      timestamp,
      source,
    });
  };

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
    <div className={s.container}>
      <p className={s.time}>
        {String(date.getHours()).padStart(2, "0")} :{" "}
        {String(date.getMinutes()).padStart(2, "0")}{" "}
        <span className={s.ampm}>{date.getHours() > 12 ? "PM" : "AM"}</span>
      </p>
      <p className={s.date}>
        {date.toLocaleDateString("en", { weekday: "long" })} ,{" "}
        {date.toLocaleString("en", { month: "short" })}{" "}
        {String(date.getDay()).padStart(2, "0")}
      </p>
      <div className={s.widget_container}>
        <img className={s.widget1} src={"/widget1.png"} alt="" />
        {moments && (
          <div
            className={s.moment}
            style={{ backgroundImage: `url(${moments.momentUrl})` }}
          >
            <div className={s.footer}>
              <img className={s.icon} src="/camera.png" alt="" />
              <p className={s.label}>New Moments</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
