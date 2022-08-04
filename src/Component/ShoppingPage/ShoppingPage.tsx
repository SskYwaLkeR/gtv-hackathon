import { Shop } from "../Shop";
import { FLASH_SALE, MY_BAG, FOR_FANS } from "../../Constants/ShopData";
import s from "./ShoppingPage.module.css";
export const ShoppingPage = () => {
  return (
    <div className={s.container}>
      <Shop
        title={MY_BAG.title}
        iconUrl={MY_BAG.iconUrl}
        colorType={MY_BAG.colorType}
        products={MY_BAG.products}
      />
      <Shop
        title={FLASH_SALE.title}
        iconUrl={FLASH_SALE.iconUrl}
        colorType={FLASH_SALE.colorType}
        products={FLASH_SALE.products}
      />
      <Shop
        title={FOR_FANS.title}
        iconUrl={FOR_FANS.iconUrl}
        colorType={FOR_FANS.colorType}
        products={FOR_FANS.products}
      />
    </div>
  );
};
