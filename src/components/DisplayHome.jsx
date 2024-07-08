import React from "react";
import Navbar from "./Navbar";
import { albumsData, songsData } from "../assets/assets";
import Albumitem from "./Albumitem";
import SongItem from "./SongItem";

function DisplayHome() {
  return (
    <>
      <Navbar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((data, index) => {
            return (
              <Albumitem
                key={index}
                name={data.name}
                desc={data.name}
                image={data.image}
                id={data.id}
              />
            );
          })}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Today's biggest hits</h1>
        <div className="flex overflow-auto">
          {songsData.map((data, index) => {
            return (
              <SongItem
                key={index}
                name={data.name}
                image={data.image}
                desc={data.desc}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default DisplayHome;
