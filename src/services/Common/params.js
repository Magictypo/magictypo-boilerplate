import _ from 'lodash';

const ParamsHelperSvc = {
  objectToParams(data) {
    if (data) {
      return (
        `?${
          Object.keys(data)
            .filter((k) => data[k] !== 'all')
            .filter((k) => data[k] !== '')
            .filter((k) => data[k] !== null)
            .map((k) => {
              if (typeof data[k] === 'string' || typeof data[k] === 'number') {
                return `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`;
              }
              if (Array.isArray(data[k])) {
                return `${encodeURIComponent(k)}=${data[k].join(',')}`;
              }
            })
            .join('&')}`
      );
    }
    return '';
  },

  objectToFormData(data) {
    const formData = new FormData();
    _.forEach(data, (value, key) => {
      formData.append(key, value);
    });
    return formData;
  },

  arrayToParams(key, array) {
    if (array) {
      return `?${key}=${array.joint(',')}`;
    }
    return '';
  },
};

export default (ParamsHelperSvc);
