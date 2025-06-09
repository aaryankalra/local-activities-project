import React from "react";
import ActivityCard from "./ActivityCard.js";

const Activity = ({ activities, setActivities, toSearch, toFilter }) => {
  const filteredActivities = toSearch
    ? activities.filter(
        (item) =>
          item.title.toLowerCase().includes(toSearch.toLowerCase()) ||
          item.description.toLowerCase().includes(toSearch.toLowerCase())
      )
    : activities;

  return (
    <>
      <div className="flex items-center justify-center mt-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredActivities.map((item) => (
            <ActivityCard
              key={item.docId}
              item={item}
              itemId={item.docId}
              setActivities={setActivities}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Activity;
