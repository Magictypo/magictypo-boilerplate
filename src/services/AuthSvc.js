import axios from 'axios';

export default {
  signIn(email, password) {
    const data = {
      email,
      password,
    };
    return axios.post('/api/v1/sign_in', data);
  },
  signOut() {
    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('user');
  },
};
