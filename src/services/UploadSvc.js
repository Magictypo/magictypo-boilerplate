import axios from 'axios';

export default {
  uploadFile(fd) {
    return axios.post('/api/v1/leads/upload-file', fd);
  },
};
