import firebase from "firebase/app";
import "firebase/database";
import Head from "next/head";
import BeerCounter from "../components/BeerCounter";
import WineCounter from "../components/WineCounter";
import CocktailCounter from "../components/CocktailCounter";
import { get } from "js-cookie";

const dbRefObject = firebase.database().ref().child("data");
const dbRefBeer = dbRefObject.child("beer");
const dbRefWine = dbRefObject.child("wine");
const dbRefCocktail = dbRefObject.child("cocktail");

var rootRef = firebase.database().ref();
var rootReq = rootRef.child("data");
// var beerRef = rootReq.child("data/beer/{id}");
// beerRef.on("value", getReq);
rootReq.on("value", getReq);

function getReq(snap) {
  var total = 0;
  snap.forEach((keyReq) => {
    var countEinar = keyReq.val().Einar;
    var countDavid = keyReq.val().David;
    var countIngvi = keyReq.val().Ingvi;
    var countKristian = keyReq.val().Kristian;
    var countOli = keyReq.val().Oli;
    var countTommi = keyReq.val().Tommi;
    var countKristjan = keyReq.val().Kristjan;

    total = countEinar;
    // not sure I will manage to do more here....
  });
  // return console.log(total, "WINE COUNT SUM in INDEX");
}

export default function IndexPage() {
  return (
    <div className="flex flex-col items-center justify-center space-y-12">
      <h2 className="p-3 font-bold bg-yellow-300 md:text-2xl">LET'S DRINK</h2>

      <div className="flex justify-end ml-24">
        <h2 className="text-2xl px-4">Wine 🍷</h2>
        <h2 className="text-2xl px-4">Beer 🍺</h2>
        <h2 className="text-2xl px-4">Cocktail 🍹</h2>
      </div>
      {/* David */}
      <div className="flex flex-row justify-around">
        <div className="px-2">
          <h2 className="text-2xl font-bold ">Davíð</h2>
        </div>
        <div className="px-2">
          <WineCounter id="David" />
        </div>
        <div className="px-2">
          <BeerCounter id="David" />
        </div>
        <div className="px-2">
          <CocktailCounter id="David" />
        </div>
      </div>
      {/* Einar */}
      <div className="flex flex-row">
        <div className="px-2">
          <h2 className="text-2xl font-bold ">Einar</h2>
        </div>
        <div className="px-2">
          <WineCounter id="Einar" />
        </div>
        <div className="px-2">
          <BeerCounter id="Einar" />
        </div>
        <div className="px-2">
          <CocktailCounter id="Einar" />
        </div>
      </div>
      {/* Ingvi */}
      <div className="flex flex-row">
        <div className="px-2">
          <h2 className="text-2xl font-bold ">Ingvi</h2>
        </div>
        <div className="px-2">
          <WineCounter id="Ingvi" />
        </div>
        <div className="px-2">
          <BeerCounter id="Ingvi" />
        </div>
        <div className="px-2">
          <CocktailCounter id="Ingvi" />
        </div>
      </div>

      {/* Kristian */}
      <div className="flex flex-row">
        <div className="px-2">
          <h2 className="text-2xl font-bold ">Kristian</h2>
        </div>
        <div className="px-2">
          <WineCounter id="Kristian" />
        </div>
        <div className="px-2">
          <BeerCounter id="Kristian" />
        </div>
        <div className="px-2">
          <CocktailCounter id="Kristian" />
        </div>
      </div>

      {/* Kristjan */}
      <div className="flex flex-row">
        <div className="px-2">
          <h2 className="text-2xl font-bold ">Kristjan</h2>
        </div>
        <div className="px-2">
          <WineCounter id="Kristjan" />
        </div>
        <div className="px-2">
          <BeerCounter id="Kristjan" />
        </div>
        <div className="px-2">
          <CocktailCounter id="Kristjan" />
        </div>
      </div>

      {/* Oli */}
      <div className="flex flex-row">
        <div className="px-2">
          <h2 className="text-2xl font-bold ">Olafur</h2>
        </div>
        <div className="px-2">
          <WineCounter id="Oli" />
        </div>
        <div className="px-2">
          <BeerCounter id="Oli" />
        </div>
        <div className="px-2">
          <CocktailCounter id="Oli" />
        </div>
      </div>
    </div>
  );
}
