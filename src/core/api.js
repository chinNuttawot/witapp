import AppSettings from "./appSettings.json";
import axios from "./axios"
const API = {};

const apiBaseUrl = `${AppSettings.apiUrl}/api`;
API.gitNoit = async (params) => {
  return new Promise(async (resolve, reject) => {
    axios({
      headers: {  },
      method: "get",
      url: `${apiBaseUrl}/Agreement/Current`,
      params: {},
    })
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
  });
};

export default API;
