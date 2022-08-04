type NavItem = {
  id: number;
  label: string;
  icon: string;
  isActive: boolean;
  link: string;
};

export const NAV_ITEM = [
  {
    id: 1,
    label: "Moments",
    icon: "/Camera.png",
    isActive: false,
    link: "/moments",
  },
  {
    id: 1,
    label: "Shop",
    icon: "/bag.png",
    isActive: false,
    link: "/shop",
  },
  {
    id: 1,
    label: "Did You Know",
    icon: "/bulb.png",
    isActive: false,
    link: "/explore",
  },
  {
    id: 1,
    label: "Watch Party",
    icon: "/confetti.png",
    isActive: false,
    link: "watch-party",
  },
];
