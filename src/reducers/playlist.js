// const { useReducer } = React

// const reducer = (state,action) => {
//     switch (action) {
//         default:
//             return state;
//     }
// }

// const playlistReducer = () => {
//     const [state,dispatch] = useReducer(reducer,{})
//     return(
//         {state}
//     )
// }

// export default playlistReducer;
const playlistReducer = (state = {}, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  export default playlistReducer;