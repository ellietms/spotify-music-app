import axios from 'axios';

const getParamValues = (url) => {
    return(
        url.split(`#`)[1].split(`&`)
    )
}