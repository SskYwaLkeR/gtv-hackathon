import React from "react";
import { BottomSheet } from "../src/Components/BottomSheet";
import { Header } from "../src/Components/Header";
import { Moments } from "../src/Components/Moments";
import { MomentsCategories } from "../src/Components/Moments/MomentCategories";

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

const Activecorner = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        background: "#1e1e1e",
      }}
    >
      <Header
        heading="Glance Active Corner"
        showback={false}
        showProfile={true}
      />
      <Moments
        title="Recent Moment"
        imgsrc="/Content.png"
        toggleDrawer={toggleDrawer}
      />

      <MomentsCategories title="Thriller Moments" images={thriller} />

      <MomentsCategories title="Emotional Moments" images={emotional} />

      <BottomSheet
        toggleDrawer={toggleDrawer}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        imgsrc={"/Content.png"}
      />
    </div>
  );
};

export default Activecorner;
