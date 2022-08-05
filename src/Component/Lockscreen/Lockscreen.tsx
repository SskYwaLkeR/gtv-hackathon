import s from "./Lockscreen.module.css";
import { useRouter } from "next/router";
import { onValue, push, ref, set } from "firebase/database";
import { database } from "../../firebase";
import { useEffect, useState } from "react";

export type Moments = {
  title: string;
  momentUrl: string;
  timestamp: string;
  source: string;
};

const date = new Date();

export const Lockscreen = () => {
  const [moments, setMoments] = useState({});
  const router = useRouter();

  const getLastMoment = () => {
    if (Object.keys(moments).length < 4) return null;
    // @ts-ignore
    return moments[Object.keys(moments)[Object.keys(moments).length - 1]];
  };

  const writeMomentsData = (data: Moments) => {
    return;
    const { title, timestamp, momentUrl, source } = data;
    const postMomentRef = ref(database, "moments");
    const newMoment = push(postMomentRef);
    set(newMoment, {
      title,
      momentUrl,
      timestamp,
      source,
    });
  };

  const lastMoment = getLastMoment();

  const readMomentsData = () => {
    const momentsRef = ref(database, "moments");
    onValue(momentsRef, (snapshot) => {
      const data = snapshot.val();
      console.log("DATA", data);
      setMoments(data);
    });
  };

  // writeMomentsData({
  //   title: "Lucifer",
  //   source: "NETFLIX",
  //   momentUrl:
  //       "https://images.unsplash.com/photo-1521418517596-093782862837?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80",
  //   timestamp: String(date.getTime()),
  // });

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
        {lastMoment && (
          <div
            className={s.moment}
            style={{
              backgroundImage: `url(${lastMoment.momentUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            onClick={() => router.push("/")}
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
