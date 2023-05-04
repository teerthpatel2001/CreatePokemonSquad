import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteSquad } from "../../state/action-creator";

export default function SquadData() {
  const displayData = useSelector((state) => state.todo.squadData);
  console.log("sData", displayData);

  const dispatch = useDispatch();

  const [blankArray, setBlankArray] = useState([
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
  ]);

  const handleDelete = (deleteId) => {
    const newData = displayData.filter(
      (pokeSquad) => pokeSquad.id !== deleteId
    );
    dispatch(DeleteSquad(newData));
    console.log("newData", newData);
  };

  return (
    <div className="main">
      <h2>Selected Squad</h2>
      <div className="mainTemplete">
        {displayData.map((e, i) => {
          return (
            <div className="squadList" key={e.id}>
              <button className="deleteBtn" onClick={() => handleDelete(e.id)}>
                X
              </button>
              <img src={e.pokemonImg} alt="" />
              <h3>{e.pokemonName}</h3>
              <h3>{e.pokemonFeature}</h3>
            </div>
          );
        })}
        <div className="card2">
          {blankArray.map((e, i) => {
            return displayData.length < i + 1 ? (
              <div className="dammyCard" key={i}>
                {e}
              </div>
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
}
