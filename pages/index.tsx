import type { NextPage } from "next";
import { ShoppingPage } from "../src/Component/ShoppingPage";
import { Footer } from "../src/Component/Footer";

const Home: NextPage = () => {
  return (
    <div>
      <ShoppingPage />
      <Footer />
    </div>
  );
};

export default Home;
