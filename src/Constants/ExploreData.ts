export type ExploreType = {
  title: string;
  data: Content[];
  type: "SHORTS" | "VIDEOS";
  titleStyle: "GRADIENT" | "STATIC";
};

export type Content = {
  source: "YOUTUBE" | "MOJ";
  thumbnail: string;
  creatorAvatar: string;
  creator: string;
  likes: string;
  title: string;
};

export const VIDEO_DATA: ExploreType = {
  title: "Can’t miss this",
  type: "VIDEOS",
  titleStyle: "GRADIENT",
  data: [
    {
      source: "YOUTUBE",
      thumbnail: "/avenger_endgame.png",
      creatorAvatar: "/girl.png",
      creator: "New Rockstars",
      likes: "1.2 M",
      title: "Details you must have missed",
    },
    {
      source: "MOJ",
      thumbnail: "/avenger.png",
      creatorAvatar: "/girl.png",
      creator: "New Rockstars",
      likes: "1.2 M",
      title: "How do they know?",
    },
  ],
};

export const SHORT_DATA: ExploreType = {
  title: "Short Videos",
  type: "SHORTS",
  titleStyle: "STATIC",
  data: [
    {
      source: "YOUTUBE",
      thumbnail: "/iron_man_wall.png",
      creatorAvatar: "/girl.png",
      creator: "Jimmy Lee",
      likes: "1.2 M",
      title: "Fan Tribute to Iron-...",
    },
    {
      source: "MOJ",
      thumbnail: "/iron_man_dark.png",
      creatorAvatar: "/boy.png",
      creator: "Shivam Ingale",
      likes: "679 k",
      title: "Emotional Moments...",
    },
  ],
};
