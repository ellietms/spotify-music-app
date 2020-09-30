import React from 'react';
import _ from 'lodash';
import {getParamValues} from '../utils/functions';

const RedirectPage = () => {
    //access the URL parameters and store them in local storage.
    function componentDidMount(){
      const {setExpiryTime , history , location} = props; 
      try{
        if(_.isEmpty(location.hash)){
            return history.push('/dashboard')
        }
        //result is a object with access_token and expiry_time and their values
        const access_token = getParamValues(location);
        //convert to milliseconds
        const expiryTime = new Date().getTime() + access_token.expires_in*1000;
        //check function.js component 
        localStorage.setItem('params',JSON.stringify(access_token));
        localStorage.setItem('expiry_time',expiryTime);
        history.push('/dashboard');
      } 
      catch(error){
        history.push('/');
      }
    }
    return(
        null
    );
};

export default RedirectPage;