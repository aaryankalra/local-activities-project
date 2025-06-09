"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { getFirestore, doc, addDoc, collection } from "firebase/firestore";
import app from "../../utils/FirebaseConfig.js";
import toast from "react-hot-toast";
import Link from "next/link";

const create = () => {
  const router = useRouter();

  const [input, setInput] = useState({});
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      setInput((value) => ({ ...value, userId: user.id }));
      setInput((value) => ({ ...value, userFullname: user.fullName }));
      setInput((value) => ({ ...value, userProfileUrl: user.imageUrl }));
    }
  }, [user]);

  const handleChange = (e) => {
    const name = e.target.name;
    const data = e.target.value;
    setInput((value) => ({ ...value, [name]: data }));
  };

  const db = getFirestore(app);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "activities"), input);
    router.push("/");
    toast.success("Event has been created.");
  };

  return (
    <>
      <div className="py-13 bg-base-100 flex flex-col items-center justify-center min-h-full">
        <h1 className="text-5xl font-bold mb-8 text-primary">Add Event</h1>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 md:grid-cols-2 mb-6">
            <div>
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Title
              </label>
              <input
                type="text"
                name="title"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Outdoor painting competition"
                required
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Description
              </label>
              <input
                type="text"
                name="description"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="An outdoor painting competition with prizes worth Rs. 10000"
                required
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="date"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Date
              </label>
              <input
                type="date"
                name="date"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 -500"
                required
                onChange={handleChange}
              />
            </div>

            <div>
              <label
                htmlFor="location"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Location
              </label>
              <input
                type="text"
                name="location"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Navi Mumbai"
                required
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="imageUrl"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Image URL
            </label>
            <input
              type="text"
              name="imageUrl"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="https://images.unsplash.com/..."
              required
              onChange={handleChange}
            />
          </div>

          <div className="flex gap-2">
            <button
              type="submit"
              className="text-white bg-primary hover:bg-indigo-800 hover:cursor-pointer focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Submit
            </button>
            <Link href="/">
              <button className="btn hover:cursor-pointer focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                Go Back
              </button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default create;
