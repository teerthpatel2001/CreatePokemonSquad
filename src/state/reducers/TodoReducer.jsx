import {
  APIDATA,
  DELETEDATA,
  POKYDETAIL,
  POKYNAME,
  SQUADADD,
  SQUADDATA,
} from "../types";

const initialState = {
  datas: [],
  pokyName: "",
  pokyDetail: [],
  tempSquad: [],
  squadData: [],
};

const reducer = (state = initialState, action) => {
  console.log("action", state, action);
  switch (action.type) {
    
    case APIDATA:
      return {
        ...state,
        apiData: action.payload.results,
      };

    case POKYNAME:
      return { ...state, pokyName: action.payload };

    case POKYDETAIL:
      return { ...state, pokyDetail: action.payload };

    case SQUADADD:
      console.log("Squad Add called");
      return { ...state, tempSquad: action.payload[0] };

    case SQUADDATA:
      return { ...state, squadData: [...state.squadData, state.tempSquad] };

    case DELETEDATA:
      console.log("delete Called...");
      return { ...state, squadData: action.payload };

    default:
      return state;
  }
};

export default reducer;
