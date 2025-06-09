import React, { useEffect, useState } from "react";
import Categories from "../../../utils/Data";

const ActivityList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(Categories);
  });

  return (
    <>
      <div className="flex justify-center mt-5">
        <div className="max-w-1/2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {categories.map((category) => (
            <div
              key={category.id}
              className="text-black flex items-center justify-center gap-1 font-medium text-lg hover:scale-110 hover:cursor-pointer transition-all"
            >
              <p>{category.image}</p>
              <p>{category.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ActivityList;
