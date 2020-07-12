import axios from 'axios';

export default {
  getAllCategories() {
    return axios.get('/api/v1/master/categories');
  },
};
