import React from "react";

const ActivityCard = ({ item }) => {
  return (
    <>
      <div className="text-black card bg-base-100 w-64 shadow-sm">
        <figure>
          <img src={item.imageUrl} alt="Event Image" className="h-52" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{item.title}</h2>
          <p>{item.description}</p>
          <div className="card-actions justify-between mt-2">
            <button
              className="btn btn-ghost"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              Read More
            </button>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">{item.title}!</h3>
                <p className="py-4">{item.description}</p>
                <p className="text-gray-500">{item.date}</p>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
            <button className="btn btn-primary btn-soft">Opt in</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActivityCard;
