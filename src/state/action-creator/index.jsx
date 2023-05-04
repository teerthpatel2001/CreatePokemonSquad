import {APIDATA,DELETEDATA,POKYDETAIL,POKYNAME,SQUADADD,SQUADDATA} from "../types";

// const addTodoAction = (data) => ({ type: ADDTODO, payload: data });

export const getApiData = (apivalue) => {
  return async (dispatch, getStore) => {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon");
      const data = await response.json();
      dispatch({ type: APIDATA, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getPokyName = (name) => {
  return async (dispatch, getStore) => {
    if (name !== "") {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );
        const data = await response.json();
        dispatch({ type: POKYNAME, payload: name });
        dispatch({ type: POKYDETAIL, payload: [data] });

        const obj = {
          id: new Date().getTime(),
          pokemonName: data.name,
          pokemonImg: data.sprites.back_default,
          pokemonFeature: data.moves[0].move.name,
        };
        dispatch({ type: SQUADADD, payload: [obj] });
      } catch (error) {
        console.log(error);
      }
    }
  };
};

export const DisplaySquad = (squad) => {
  return (dispatch, getStore) => {
    try {
      dispatch({ type: SQUADDATA, payload: {} });
    } catch (err) {
      console.log(err);
    }
  };
};

export const DeleteSquad = (newData) => {
  return (dispatch, getStore) => {
    try {
      dispatch({ type: DELETEDATA, payload: newData });
    } catch (error) {
      console.log(error);
    }
  };
};
