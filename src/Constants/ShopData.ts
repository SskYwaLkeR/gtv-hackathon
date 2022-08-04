import { ShopProps } from "../Component/Shop/Shop";

export const MY_BAG: ShopProps = {
  title: "Your Bag",
  iconUrl: "/bag.png",
  colorType: "STATIC",
  products: [
    {
      productName: "Iron Man Memoir",
      itemCount: 12,
      thumbnailUrl: "/iron_man.png",
      source: "AMAZON",
    },
    {
      productName: "Moto G phone cover",
      thumbnailUrl: "/iron_man_cover.png",
      source: "FLIPKART",
    },
  ],
};

export const FLASH_SALE: ShopProps = {
  title: "Flash Sale",
  iconUrl: "/flash.png",
  colorType: "GRADIENT1",
  products: [
    {
      productName: "Love You 3000 T-...",
      thumbnailUrl: "/tshirt.png",
      source: "AMAZON",
      price: 1020,
      discountedPrice: 700,
    },
    {
      productName: "Love You 3000 Pos...",
      thumbnailUrl: "/iron_man_cover.png",
      source: "FLIPKART",
      price: 700,
      discountedPrice: 399,
    },
    {
      productName: "Love You 3000 Pos...",
      thumbnailUrl: "/iron_man_cover.png",
      source: "FLIPKART",
      price: 550,
      discountedPrice: 278,
      itemCount: 9,
    },
  ],
};

export const FOR_FANS: ShopProps = {
  title: "For Diehard Fans Only",
  iconUrl: "/heart.png",
  colorType: "GRADIENT2",
  products: [
    {
      productName: "Love You 3000 T-...",
      thumbnailUrl: "/iron_man.png",
      source: "AMAZON",
      price: 1020,
      discountedPrice: 700,
    },
    {
      productName: "Love You 3000 Pos...",
      thumbnailUrl: "/iron_man_cover.png",
      source: "FLIPKART",
      price: 700,
      discountedPrice: 399,
    },
    {
      productName: "Love You 3000 Pos...",
      thumbnailUrl: "/iron_man_cover.png",
      source: "FLIPKART",
      price: 550,
      discountedPrice: 278,
      itemCount: 9,
    },
  ],
};
