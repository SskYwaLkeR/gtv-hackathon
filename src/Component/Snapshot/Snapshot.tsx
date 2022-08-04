import { onValue, ref, set } from "firebase/database";
import { database } from "../../firebase";
import { useEffect, useState } from "react";

export type Moments = {
  title: string;
  momentUrl: string;
  timestamp: string;
  source: string;
  id: string;
};

export const Snapshot = () => {
  const [moments, setMoments] = useState<Moments[]>([]);

  const updateMomentsData = (data: keyof Moments) => {};

  const writeMomentsData = (data: Moments) => {
    const { title, timestamp, momentUrl, source } = data;
    set(ref(database, "moments"), {
      id: "abc-123-xyz",
      title,
      momentUrl,
      timestamp,
      source,
    });
  };

  const readMomentsData = () => {
    const momentsRef = ref(database, "moments");
    onValue(momentsRef, (snapshot) => {
      const data = snapshot.val();
      console.log("DATA", data);
      setMoments([...moments, data]);
    });
  };

  useEffect(() => {
    readMomentsData();
  }, []);

  return (
    <div>
      <h1>Firebase integration</h1>
      {moments.map((item) => (
        <div key={item.momentUrl}>
          {item.title}
          <img src={item.momentUrl} alt="" width={100} height={100} />
          <p>{item.source}</p>
        </div>
      ))}
    </div>
  );
};
