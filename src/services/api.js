import axios from 'axios';

function callFetchAxios(endpoint, params, method, reqbody = {}) {
  const axiosInstance = axios.create({
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const prodapi = process.env.REACT_APP_PRODAPI.concat(endpoint);

  switch (method) {
    case 'GET':
      return axiosInstance
        .get(prodapi, {
          params
        })
        .then(response => response)
        .catch(error => {
          throw error;
        });
    case 'POST':
      return axiosInstance
        .post(prodapi, reqbody)
        .then(response => response)
        .catch(error => error);
    case 'PUT':
      return axiosInstance
        .put(prodapi, reqbody)
        .then(response => response)
        .catch(error => error);
    case 'PATCH':
      return axiosInstance
        .patch(prodapi, reqbody)
        .then(response => response)
        .catch(error => error);
    case 'DELETE':
      return axiosInstance
        .delete(prodapi)
        .then(response => response)
        .catch(response => response);
    default:
      return '';
  }
}

export const callFetchApi = (...params) => callFetchAxios(...params);

export default callFetchApi;
