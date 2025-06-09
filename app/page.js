"use client";

import { getFirestore, collection, getDocs } from "firebase/firestore";
import app from "../utils/FirebaseConfig.js";

import CategoryList from "./components/Home/CategoryList.js";
import HeroSection from "./components/Home/HeroSection.js";
import SearchBox from "./components/Home/SearchBox.js";
import { useEffect, useState } from "react";
import ActivityList from "./components/Home/ActivityList.js";

export default function Home() {
  const db = getFirestore(app);

  const [activities, setActivities] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "activities"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      setActivities((activities) => [...activities, doc.data()]);
    });
  };

  return (
    <div className="min-h-screen bg-base-100">
      <HeroSection />
      <SearchBox />
      <CategoryList />
      <ActivityList activities={activities} />
    </div>
  );
}
