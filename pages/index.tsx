import React, { useState } from "react";
import { BottomSheet } from "../src/Components/BottomSheet";
import { Header } from "../src/Components/Header";
import { Moments } from "../src/Components/Moments";
import { MomentsCategories } from "../src/Components/Moments/MomentCategories";
import { Footer } from "../src/Component/Footer";

const thriller = [
  {
    src: "/witcher.png",
    timestamp: "Today",
  },
  {
    src: "/witcher_logo.png",
    timestamp: "2 days ago",
  },
];
const emotional = [
  {
    src: "/witcher_person.png",
    timestamp: "Today",
  },
];

const Index = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedImg, setSelectedImg] = useState("");
  const toggleDrawer = (img: string) => {
    console.log(img);
    setIsOpen((prevState) => !prevState);
    setSelectedImg(img);
  };
  return (
    <div
      style={{
        width: "100%",
        height: "min-content",
        minHeight: "100%",
        background: "#1e1e1e",
        paddingBottom: "70px",
      }}
    >
      <Header
        heading="Glance Active Corner"
        showback={false}
        showProfile={true}
      />
      <Moments title="Recent Moment" toggleDrawer={toggleDrawer} />
      <MomentsCategories
        onclick={toggleDrawer}
        title="Thriller Moments"
        images={thriller}
      />
      <MomentsCategories
        onclick={toggleDrawer}
        title="Emotional Moments"
        images={emotional}
      />
      <Footer />
      <BottomSheet
        toggleDrawer={toggleDrawer}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        imgsrc={selectedImg}
      />
    </div>
  );
};

export default Index;
