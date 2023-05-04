import { combineReducers } from "redux";
import toDoReducer from "./TodoReducer";
import pokeReducer from "../pokemon/poke.reducer";

const reducers = combineReducers({
  todo: toDoReducer,
  pokeReducer: pokeReducer,
});


export default reducers;
