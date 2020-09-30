import axios from 'axios';

// getParamValues function that will store the access_token, token_type and expires_in  
// values in an object which will look like this:
const getParamValues = (url) => {
    return(
        url.split(`#`)[1].split(`&`)
    )
}