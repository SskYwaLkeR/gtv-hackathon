import type { NextPage } from "next";
import { ShoppingPage } from "../src/Component/ShoppingPage";
import { Footer } from "../src/Component/Footer";

const ShopPage: NextPage = () => {
  return (
    <div>
      <ShoppingPage />
      <Footer />
    </div>
  );
};

export default ShopPage;
