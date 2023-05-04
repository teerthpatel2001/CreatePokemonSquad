// import { useDispatch } from "react-redux";
import { pokeTyles } from "./poke.types";

export const setAllData = (data) => ({
  type: pokeTyles.SET_POKE_DATA,
  payload: data,
});

export const setPokyName = (data) => ({
  type: pokeTyles.SET_POKYNAME,
  payload: data,
});

// const dispatch = useDispatch()
// export const setAllData = async () => {
//     // await axios.get("https://pokeapi.co/api/v2/pokemon")
//     await fetch(
//         `https://pokeapi.co/api/v2/pokemon`
//       ).then(
//         res => {
//             if(res.status === 200){
//                 debugger
//             }
//         }
//       ).catch(
//         err => {
//             console.log(err);
//         }
//       )
//     //   const data = await response.json();
// }
