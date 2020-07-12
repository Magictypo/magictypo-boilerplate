export default {
  getError(e) {
    if (typeof e.response !== 'undefined') {
      // eslint-disable-next-line default-case
      switch (e.response.status) {
        case 400:
          return e.response.data.message
            ? e.response.data.message : e.response.data.error;
        case 401:
          return e.response.data.message
            ? e.response.data.message : e.response.data.error;
        case 404:
          return e.response.data.message;
        case 406:
          return 'File not found';
        case 409:
          return e.response.data.message;
        case 500:
          return e.response.data.message
            ? e.response.data.message : e.response.data.error;
      }
    }
    return 'Please Check your Internet Connection';
  },
  getErrorTitle(e) {
    if (typeof e.response !== 'undefined') {
      // eslint-disable-next-line default-case
      switch (e.response.status) {
        case 400:
          return e.response.data.error;
        case 401:
          return e.response.data.error;
        case 404:
          return e.response.data.error;
        case 406:
          return e.response.data.error;
        case 409:
          return e.response.data.error;
        case 500:
          return e.response.data.error;
      }
    }
    return 'Please Check your Internet Connection';
  },
  getErrorWithState(e, state) {
    if (typeof e.response !== 'undefined') {
      const { status } = e.response;
      if (state === 'login') {
        // eslint-disable-next-line default-case
        switch (status) {
          case 400:
            return e.response.data.message
              ? e.response.data.message : e.response.data.error;
          case 401:
            return e.response.data.message
              ? e.response.data.message : e.response.data.error;
          case 404:
            return e.response.data.message;
          case 406:
            return 'File not found';
          case 409:
            return e.response.data.message;
          case 500:
            return e.response.data.message
              ? e.response.data.message : e.response.data.error;
        }
      }
    }
    return 'Please Check your Internet Connection';
  },
  getErrors(e) {
    // eslint-disable-next-line prefer-const
    let errors = {};
    if (typeof e.response === 'undefined') {
      return errors;
    }

    if (e.response.status !== 409) {
      return errors;
    }

    if (typeof e.response.data.errors === 'undefined'
      || !Array.isArray(e.response.data.errors)) {
      return errors;
    }

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < e.response.data.errors.length; i++) {
      const v = e.response.data.errors[i];
      errors[v.field] = v.defaultMessage;
    }
    return errors;
  },
};
