import React from "react";

const soon = () => {
  return (
    <>
      <div class="w-full flex flex-col justify-center items-center bg-base-100 min-h-64">
        <div class="absolute animate-bounce z-10 w-full flex justify-center items-end bg-base-100">
          <h1 class="sm:text-9xl text-7xl font-extrabold animate-[wiggle_1s_ease-in-out_infinite] text-primary">
            Coming Soon
          </h1>
        </div>
        <div className="pt-85">
          <p className="text-4xl font-bold text-black text-primary">
            This Page is under construction
          </p>
          <p className="text-black mt-2 text-center">
            We will soon allow to add these events to your calendar
          </p>
        </div>
      </div>
    </>
  );
};

export default soon;
