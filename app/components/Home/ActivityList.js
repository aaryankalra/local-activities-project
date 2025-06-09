import React from "react";
import ActivityCard from "./ActivityCard.js";

const Activity = ({ activities }) => {
  return (
    <>
      <div className="flex items-center justify-center mt-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {activities.map((item) => (
            <ActivityCard item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Activity;
