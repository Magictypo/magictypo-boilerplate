import axios from 'axios';

const url = '/captcha/';

export default {
  getCaptcha() {
    return axios.post(`${url}`);
  },
};
