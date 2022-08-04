import React from "react";
import s from "./Shop.module.css";

export type Products = {
  thumbnailUrl: string;
  price?: number;
  discountedPrice?: number;
  itemCount?: number;
  productName: string;
  source: "AMAZON" | "FLIPKART";
};

export type ShopProps = {
  title: string;
  iconUrl: string;
  colorType: "STATIC" | "GRADIENT1" | "GRADIENT2";
  products: Products[];
};

export const Shop: React.FC<ShopProps> = ({
  title,
  iconUrl,
  colorType,
  products,
}: ShopProps) => {
  return (
    <div className={s.container}>
      <div className={s.header}>
        <img className={s.icon} src={iconUrl} alt="" />
        <h3
          className={
            colorType === "GRADIENT1"
              ? `${s.title} ${s.gradient_1}`
              : colorType === "GRADIENT2"
              ? `${s.title} ${s.gradient_2}`
              : `${s.title} ${s.static}`
          }
        >
          {title}
        </h3>
      </div>
      <div className={s.product_container}>
        {products.map((product) => (
          <div className={s.product} key={product.productName}>
            <img className={s.product_img} src={product.thumbnailUrl} alt="" />
            <img
              className={s.source}
              src={
                product.source === "AMAZON" ? "/amazon.png" : "/flipkart.png"
              }
              alt=""
            />
            <div className={s.product_desc}>
              <h4 className={s.name}>{product.productName}</h4>
              {product.price && (
                <div className={s.details}>
                  <span className={s.price}>₹ {product.discountedPrice} </span>
                  <span className={s.discounted_price}>
                    <s>{product.price}</s>
                  </span>
                </div>
              )}
              {product.itemCount && (
                <p className={s.item_count}>{product.itemCount} pieces left</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
