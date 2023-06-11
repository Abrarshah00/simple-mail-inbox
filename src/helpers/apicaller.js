import axios from 'axios';

export default function apiCaller(endPoint, method, data) {
  if (method === 'get') {
    return axios.get(endPoint);
  }
  return axios.post(endPoint, data);
}
