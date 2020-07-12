import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import dummyResponse from '@/resources/mock/dummyResponse.json';

const mock = new MockAdapter(axios);
const enable = false;

if (process.env.NODE_ENV === 'development' && enable) {
  mock
    .onGet('/api/v1/article',
      {
        params: {
          page_size: 20,
          page: 1,
        },
      })
    .reply(200, dummyResponse);
}
