import { pokeTyles } from "./poke.types";

const INITIAL_STATE = {
  data: [],
  pokyName:[]
};

const pokeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case pokeTyles.SET_POKE_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case pokeTyles.SET_POKYNAME:
      return {
        ...state,
        pokyName: action.payload,
      };

    default:
      return state;
  }
};

export default pokeReducer;
