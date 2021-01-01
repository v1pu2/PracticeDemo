import AsyncStorage from '@react-native-community/async-storage';
import {USER_DATA, USER_LOGIN, NEW_TOKEN} from './types';
import axios from 'axios';

// Login User - Get user token
export const generateToken = () => (dispatch) => {
  console.log('In LOgin User');
  const headers = {
    'app-version': '1.0',
    authorization: `Bearer ox3wsFkQlD98761mx2ic1jjs85q0w4`,
    'content-type': 'application/json',
  };
  axios
    .post(
      'https://evermed.in/rest/V1/vibcare/customer/generatetoken',
      {},
      {
        headers,
      },
    )
    .then((result) => {
      console.log(result.data);
      const access_token = result && result.data && result.data.access_token;
      const refresh_token = result && result.data && result.data.refresh_token;
      AsyncStorage.setItem('ACCESS_TOKEN', access_token);
      AsyncStorage.setItem('REFRESH_TOKEN', refresh_token);
      dispatch({
        type: USER_DATA,
        payload: result.data,
      });
    })
    .catch((err) => {
      console.log('error occurred', err);
    });
};

export const login = (data) => async (dispatch) => {
  console.log('In LOgin User', data);
  const access_token = await AsyncStorage.getItem('ACCESS_TOKEN');
  console.log('token', access_token);
  const headers = {
    'app-version': '1.0',
    authorization: `Bearer ${access_token}`,
    'content-type': 'application/json',
  };
  axios
    .post(
      'https://evermed.in/rest/V1/vibcare/customer/generatetoken',
      {mobile_no: data},
      {
        headers,
      },
    )
    .then((result) => {
      console.log(result.data);

      dispatch({
        type: USER_LOGIN,
        payload: result.data,
      });
    })
    .catch((err) => {
      AsyncStorage.setItem('ERROR', err.status);
      console.log('error occurred', err);
    });
};

export const refresh_token = (data) => async (dispatch) => {
  console.log('In refresh_token User', data);
  const access_token = await AsyncStorage.getItem('ACCESS_TOKEN');
  console.log('token', access_token);
  const headers = {
    'app-version': '1.0',
    authorization: `Bearer ${access_token}`,
    'content-type': 'application/json',
  };
  axios
    .post(
      'https://evermed.in/rest/V1/vibcare/customer/generatetoken',
      {refresh_token: data},
      {
        headers,
      },
    )
    .then((result) => {
      console.log('refresh_token', result.data);
      const access_token = result && result.data && result.data.access_token;
      const refresh_token = result && result.data && result.data.refresh_token;
      AsyncStorage.setItem('ACCESS_TOKEN', access_token);
      AsyncStorage.setItem('REFRESH_TOKEN', refresh_token);
      dispatch({
        type: USER_DATA,
        payload: result.data,
      });
    })
    .catch((err) => {
      AsyncStorage.setItem('ERROR', err.status);
      console.log('error occurred', err);
    });
};

// export const getuserdata= () => (dispatch) => {​​​​​​​​
//     axios.get("/api/user/me").then((res) => {​​​​​​​​
//
//   }​​​​​​​​);
// }​​​​​​​​;
