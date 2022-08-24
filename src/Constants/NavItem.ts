type NavItem = {
  id: number;
  label: string;
  icon: string;
  isActive: boolean;
  link: string;
  activeIcon: string;
};

export const NAV_ITEM = [
  {
    id: 1,
    label: "Moments",
    icon: "/Camera.png",
    isActive: false,
    link: "/",
    activeIcon: "/camera_active.png",
  },
  {
    id: 1,
    label: "Shop",
    icon: "/shop_bag.png",
    isActive: false,
    link: "/shop",
    activeIcon: "/bag.png",
  },
  {
    id: 1,
    label: "Did You Know",
    icon: "/bulb.png",
    isActive: false,
    link: "/explore",
    activeIcon: "/bulb_active.png",
  },
  {
    id: 1,
    label: "Lockscreen",
    icon: "/confetti.png",
    isActive: false,
    link: "/lockscreen",
    activeIcon: "/confetti.png",
  },
];
