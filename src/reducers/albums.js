// import useReducer from "react";

// const reducer = (state,action) => {
//     switch (action) {
//         default:
//             return state;
//     }
// }


// const albumsReducer = () => {
//   const [state, dispatch] = useReducer(reducer, {});
//   return { state };
// };

// export default albumsReducer;
const albumsReducer = (state = {}, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  export default albumsReducer;