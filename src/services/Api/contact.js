import axios from 'axios';

const url = '/contact';

export default {
  postContact(data) {
    return axios.post(`${url}/send`, data);
  },
};
