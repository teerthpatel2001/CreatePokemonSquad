import React, { useState } from "react";
import "./Squad.css";
import { useDispatch, useSelector } from "react-redux";
import { DisplaySquad } from "../../state/action-creator";


export default function SquadAdd() {
  const dispatch = useDispatch();

  const squadObj = useSelector((state) => state.todo.tempSquad);
  const squad = useSelector((state) => state.todo.squadData);

  const [textButton, setTextButton] = useState("Add Pokemon");

  const handleClick = (e) => {
    let result = squad.find((e, i) => e.pokemonName === squadObj.pokemonName);

    if (squad?.length < 6) {
      if (!result) {
        setTextButton('Add Pokemon')
        dispatch(DisplaySquad());
      } else {
        console.log("hello...");
        setTextButton("Already in squad");
      }
    } else {
      setTextButton("Squad Full");
    }
  };

  return (
    <div className="buttonMain">
      <button className="squadAddBtn" onClick={(e) => handleClick(e)}>
        {textButton}
      </button>
    </div>
  );
}

