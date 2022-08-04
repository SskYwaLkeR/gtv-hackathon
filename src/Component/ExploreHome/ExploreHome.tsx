import { Explore } from "../Explore";
import { VIDEO_DATA, SHORT_DATA } from "../../Constants/ExploreData";
import s from "./ExploreHome.module.css";
export const ExploreHome = () => {
  return (
    <div className={s.container}>
      <h3
        className={
          VIDEO_DATA.titleStyle === "GRADIENT"
            ? `${s.title_gradinet}`
            : `${s.title_static}`
        }
      >
        {VIDEO_DATA.title}
      </h3>
      <div className={s.video_container}>
        {VIDEO_DATA.data.map((videos, idx) => (
          <Explore
            type={VIDEO_DATA.type}
            key={idx}
            source={videos.source}
            thumbnail={videos.thumbnail}
            creatorAvatar={videos.creatorAvatar}
            creator={videos.creator}
            likes={videos.likes}
            title={videos.title}
          />
        ))}
      </div>

      <div className={s.divider}></div>

      <h3
        className={
          SHORT_DATA.titleStyle === "GRADIENT"
            ? `${s.title_gradinet}`
            : `${s.title_static}`
        }
      >
        {SHORT_DATA.title}
      </h3>

      <div className={s.video_container}>
        {SHORT_DATA.data.map((videos, idx) => (
          <Explore
            type={SHORT_DATA.type}
            key={idx}
            source={videos.source}
            thumbnail={videos.thumbnail}
            creatorAvatar={videos.creatorAvatar}
            creator={videos.creator}
            likes={videos.likes}
            title={videos.title}
          />
        ))}
      </div>
    </div>
  );
};
