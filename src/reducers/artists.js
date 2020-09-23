// const { useReducer } = React

// const reducer = (state,action) => {
//     switch (action) {
//         default:
//            return state;
//     }
// }

// const artistsReducer = () => {
//     const [state,dispatch] = useReducer(reducer,{})
//     return(
//         {state}
//     )
// }


// export default artistsReducer;
const artistsReducer = (state = {}, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  export default artistsReducer;