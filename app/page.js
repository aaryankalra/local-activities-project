"use client";

import ActivityList from "./components/Home/ActivityList.js";
import HeroSection from "./components/Home/HeroSection.js";
import SearchBox from "./components/Home/SearchBox.js";

export default function Home() {
  return (
    <div className="min-h-screen bg-base-100">
      <HeroSection />
      <SearchBox />
      <ActivityList />
    </div>
  );
}
