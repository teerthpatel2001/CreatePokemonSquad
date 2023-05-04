import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { getApiData, depositMoney, withdrawMoney } from "./state/action-creator";
import { useState } from "react";
import Title from './component/FetchData/Title';
import SearchItem from './component/FetchData/SearchItem';
import DisplayPokemon from './component/PokemonData/DisplayPokemon';
import PokemonFeature from './component/PokemonData/PokemonFeature';
import SquadAdd from './component/PokemonSquad/SquadAdd';
import { setAllData } from './state/pokemon/poke.actions';
import SquadData from './component/PokemonSquad/SquadData';

export default function App() {

  // const [value, setValue] = useState("");
  const state = useSelector((state) => state.bank);
  const todoState = useSelector((state) => state.todo);

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getApiData())
    // dispatch(setAllData())
  },[])

  return (
    <div className="App">

      {/* <h1>{state}</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addTodo(value));
          setValue("");
        }}
      >
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">
          <h1>Submit</h1>
        </button>
      </form> */}
      {/* <button onClick={() => dispatch(depositMoney(1000))}>Deposit</button> */}
      {/* <button onClick={() => dispatch(withdrawMoney(1000))}>Withdraw</button> */}
      <Title/>
      <SearchItem/>
      <DisplayPokemon/>
      <PokemonFeature/>
      <SquadAdd/>
      <SquadData/>
    </div>
  )
}
