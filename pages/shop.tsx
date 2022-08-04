import type { NextPage } from "next";
import { ShoppingPage } from "../src/Component/ShoppingPage";
import { Footer } from "../src/Component/Footer";
import { Header } from "../src/Components/Header";
import React from "react";

const ShopPage: NextPage = () => {
  return (
    <div style={{ background: "#1E1E1E" }}>
      <Header
        heading="Glance Active Corner"
        showback={false}
        showProfile={true}
      />
      <ShoppingPage />
      <Footer />
    </div>
  );
};

export default ShopPage;
