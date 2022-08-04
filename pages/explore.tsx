import { ExploreHome } from "../src/Component/ExploreHome";
import { Footer } from "../src/Component/Footer";
import { Header } from "../src/Components/Header";
import React from "react";

const ExplorePage = () => {
  return (
    <>
      <Header
        heading="Glance Active Corner"
        showback={false}
        showProfile={true}
      />
      <ExploreHome />
      <Footer />
    </>
  );
};

export default ExplorePage;
