import AsyncStorage from '@react-native-community/async-storage';

async function storeToken(token) {
  try {
    await AsyncStorage.setItem('token', token);
  } catch (error) {
    console.log(error);
  }
}

async function getToken() {
  try {
    const token = await AsyncStorage.getItem('token');
    return token;
  } catch (error) {
    console.log(error);
  }
}

export const asyncStorage = { storeToken, getToken };
