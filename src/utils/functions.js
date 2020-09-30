import axios from 'axios';

// getParamValues function that will store the access_token, token_type and expires_in  
// values in an object which will look like this:
const getParamValues = (url) => {
    return(
        url.split('#').slice(1)[0].split('&').reduce((prev,curr) => {
            const[title,value] = curr.split('=');
            prev[title]=value;
            return prev;
        },{})
    )
};

// setAuthHeader function that will add the access_token to every axios API request
// it makes all axios requests have that token as an Authorization header
// without having to manually attach it to every request in the action.
const setAuthHeader = () => {
    try{
        const params =  JSON.parse(localStorage.getItem('params'));
        if(params){
            axios.defaults.headers.common['Authorization'] = `Bearer ${params.access_token}`
        }
    }
    catch(error) {
        console.log('Error setting auth', error);
    }
}

module.exports = {
    getParamValues : getParamValues,
    setAuthHeader : setAuthHeader
}