import firebase from "firebase/app";
import "firebase/database";
import { useUser } from "firebase/useUser";
import { useEffect, useState } from "react";

import Fifa from "../components/Fifa";

export default function AboutPage() {
  const [visible, setVisible] = useState("");

  var names = [
    "Einar 🐷",
    "Ingvi 🐼",
    "Tommi 🐮",
    "Kristian 🦒",
    "Dabbi 🐏",
    "Kristján 🐗",
    "Óli 🐸",
  ];

  var rndmPerson = names[Math.floor(Math.random() * names.length)];

  const loadMore = () => {
    setVisible(rndmPerson);
  };

  const reset = () => {
    setVisible("");
  };

  // const renderNames = (names) => {
  //   return (
  //     <div>
  //       <span>{names}</span>
  //     </div>
  //   );
  // };

  return (
    <div className="grid md:grid-cols-2 gap-6 grid-cols-1">
      <div>
        <div className="my-2">
          <h4 className="text-lg font-medium">Random person</h4>
        </div>
        <div>
          <div className="border rounded-md border-gray-700 w-40 px-1 py-1 h-8">
            {visible}
          </div>
          <div className="flex mt-2">
            <div className="px-1">
              <a
                className="bg-indigo-400 px-1 py-1 rounded-md border-indigo-700 mt-3"
                onClick={loadMore}
              >
                Give me people
              </a>
            </div>
            <div className="px-1">
              <a
                className="bg-indigo-400 px-1 py-1 rounded-md border-indigo-700 mt-3"
                onClick={reset}
              >
                Reset
              </a>
            </div>
          </div>
        </div>
      </div>
      <Fifa />
    </div>
  );
}
