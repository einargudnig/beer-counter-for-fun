import { useState, useEffect } from "react";
import firebase from "firebase/app";
// import firebase from "firebase/database";
import "firebase/database";
import { PlusIcon } from "@heroicons/react/outline";
import { MinusIcon } from "@heroicons/react/outline";

const BeerCounter = ({ id }) => {
  const [count, setCount] = useState("");

  useEffect(() => {
    const onCountIncrease = (count) => setCount(count.val());

    const fetchData = async () => {
      firebase
        .database()
        .ref("data/beer")
        .child(id) // Is this needed?
        .on("value", onCountIncrease);
    };

    fetchData();

    return () => {
      firebase
        .database()
        .ref("data/beer")
        .child(id)
        .off("value", onCountIncrease);
    };
  }, [id]);

  const increaseBeerCount = async () => {
    const registerCount = () =>
      fetch(`/api/incrementBeerCount?id=${encodeURIComponent(id)}`);
    registerCount();
  };

  const decreaseBeerCount = async () => {
    const registerCount = () =>
      fetch(`/api/decrementBeerCount?id=${encodeURIComponent(id)}`);
    registerCount();
  };

  return (
    <div>
      <div className="flex flex-row">
        <button
          onClick={increaseBeerCount}
          className="bg-blue-400 rounded-md px-1 py-1"
        >
          <PlusIcon className="w-5 h-5" />
        </button>
        <h5 className="bg-gray-100 text-gray-700 px-1 py-1 w-10 text-center mx-2">
          {count ? count : "0"}
        </h5>
        <button
          onClick={decreaseBeerCount}
          className="bg-blue-400 rounded-md px-1 py-1"
        >
          <MinusIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default BeerCounter;
