import useReducer from "react";

const reducer = (state,action) => {
    switch (action) {
        default:
           return state;
    }
}

const artistsReducer = () => {
    const [state,dispatch] = useReducer(reducer,{})
    return(
        {state}
    )
}


export default artistsReducer;