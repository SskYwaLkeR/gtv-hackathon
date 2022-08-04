import React from "react";
import { Content } from "../../Constants/ExploreData";
import s from "./Explore.module.css";

interface ExploreType extends Content {
  type: "VIDEOS" | "SHORTS";
}

export const Explore: React.FC<ExploreType> = ({
  title,
  likes,
  creator,
  creatorAvatar,
  thumbnail,
  source,
  type,
}: ExploreType) => {
  return (
    <div
      className={type === "VIDEOS" ? `${s.container}` : `${s.shorts_container}`}
    >
      <div
        className={type === "VIDEOS" ? `${s.video}` : `${s.shorts}`}
        style={{ backgroundImage: `url(${thumbnail})` }}
      >
        <img
          className={s.source}
          src={source === "YOUTUBE" ? "/yt_logo.png" : "/moj_logo.png"}
          alt=""
        />
        <div className={s.footer}>
          <div className={s.creator_info}>
            <img className={s.avatar} src={creatorAvatar} alt="" />
            <p className={s.name}>{creator}</p>
          </div>
          <div className={s.info}>
            <img className={s.like} src="/like.png" alt="" />
            <p className={s.like_count}>{likes}</p>
          </div>
        </div>
      </div>
      <h3 className={s.title}>{title}</h3>
    </div>
  );
};
