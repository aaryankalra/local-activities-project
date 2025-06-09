import { useUser } from "@clerk/nextjs";
import { getFirestore, doc, deleteDoc } from "firebase/firestore";
import app from "../../../utils/FirebaseConfig.js";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import Link from "next/link";

const ActivityCard = ({ item, itemId, setActivities }) => {
  const { user } = useUser();
  const [isSameUser, setIsSameUser] = useState(false);

  useEffect(() => {
    if (user && user.id === item.userId) {
      setIsSameUser(true);
    }
  }, [user, item?.userId]);

  const modalRef = useRef(null);
  const modalId = `modal_${item.id}`;

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  const db = getFirestore(app);

  const handleDelete = async () => {
    await deleteDoc(doc(db, "activities", itemId));
    setActivities((prev) =>
      prev.filter((activity) => activity.docId != itemId)
    );
    toast.success("Activity deleted successfully.");
  };

  return (
    <>
      <div className="text-black card bg-base-100 w-64 shadow-sm">
        <figure>
          <img src={item.imageUrl} alt="Event Image" className="h-52" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{item.title}</h2>
          <p className="line-clamp-3">{item.description}</p>
          <div className="card-actions justify-between mt-2">
            <button className="btn btn-ghost" onClick={openModal}>
              Read More
            </button>
            <dialog ref={modalRef} className="modal">
              <div className="modal-box w-[80rem] flex flex-col pt-0 pb-5">
                <div className="flex">
                  {/* <figure>
                    <img
                      src={item.imageUrl}
                      alt="Event Image"
                      className="rounded-lg"
                    />
                  </figure> */}
                  <div className="card-body">
                    <h2 className="card-title">{item.title}</h2>
                    <p>{item.description}</p>
                    <div>
                      <p className="font-bold">Location:</p>
                      <div className="flex-col items-center gap-2">
                        <p>{item.location}</p>
                        <p className="text-gray-700">{item.date}</p>
                      </div>
                    </div>
                    <div>
                      <p className="font-bold mb-1">Created by:</p>
                      <div className="flex items-center gap-2">
                        <img
                          src={item.userProfileUrl}
                          className="h-6 rounded-full"
                        />
                        <p>{item.userFullname}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    {isSameUser && (
                      <button
                        onClick={handleDelete}
                        className="btn bg-red-600 hover:bg-red-700 text-white mr-2"
                      >
                        Delete
                      </button>
                    )}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
            <Link href="/soon">
              <button className="btn btn-primary btn-soft">Opt in</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActivityCard;
