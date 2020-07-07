import axios from 'axios';
import { config } from '../config';
import { asyncStorage } from '../helper';

const baseUrl = config.getBaseUrl();
const url = baseUrl + '/user';

async function authenticate(credentials) {
  const reqUrl = url + '/signin';
  return await axios.post(reqUrl, credentials);
}

async function register(user) {
  const reqUrl = url + '/signup';
  return await axios.post(reqUrl, user);
}

function logOut() {}

async function update(newOptions) {
  const reqUrl = url + '/edit';
}

export const userServices = {
  authenticate,
  register,
  logOut,
  update,
};
