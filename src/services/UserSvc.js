import axios from 'axios';

export default {
  getUser() {
    return axios.get('/api/v1/me');
  },
};
