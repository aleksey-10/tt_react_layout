import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://frontend-test-assignment-api.abz.agency/api/v1/',
});

export const api = {
  getUsers(page, count) {
    return instance.get(`/users?page=${page}&count=${count}`)
      .then(response => response.data);
  },
  getPositions() {
    return instance.get('/positions').then(response => response.data);
  },
};
