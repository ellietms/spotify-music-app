import axios from "axios";

// setAuthHeader function that will add the access_token to every axios API request
// it makes all axios requests have that token as an Authorization header
// without having to manually attach it to every request in the action.
const setAuthHeader = () => {
  try {
    const params = JSON.parse(localStorage.getItem("params"));
    if (params) {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${params.access_token}`;
    }
  } catch (error) {
    console.log("Error setting auth", error);
  }
};

const get = async (url, params) => {
  setAuthHeader();
  const result = await axios.get(url, params);
  return result.data;
};

const post = async (url, params) => {
  setAuthHeader();
  const result = await axios.post(url, params);
  return result.data;
};

module.exports = {
  get: get,
  post: post,
};
