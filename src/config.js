const port = 2966;
const host = 'localhost';
const baseUrl = `http://${host}:${port}/api`;

export const config = {
  getBaseUrl: () => baseUrl,
};
