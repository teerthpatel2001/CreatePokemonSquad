import React from "react";
import { useSelector } from "react-redux";
import "./PokemonData.css";

export default function PokemonFeature() {
  const pokyDetail = useSelector((feature) => feature);
  const data = useSelector((feature) => feature);

  return (
    <div className="mainComponent">
      <div className="mainComponent--part1">
        {
        (pokyDetail.todo.pokyDetail.length)
          ? pokyDetail.todo.pokyDetail[0].stats.map((e, i) => {
              return (
                <div className="pokyBox" key={i}>
                  <h2>{e.stat.name}</h2>
                  <h2>{e.base_stat}</h2>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}
