const GlobalConfig = {
  API_URL: process.env.VUE_APP_API_URL
    ? process.env.VUE_APP_API_URL
    : 'http://localhost:8000/api',
};

export default (GlobalConfig);
