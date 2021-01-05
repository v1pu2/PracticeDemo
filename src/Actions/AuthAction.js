import AsyncStorage from '@react-native-community/async-storage';
import {USER_DATA, USER_LOGIN, NEW_TOKEN} from './types';
import axios from 'axios';

// Login User - Get user token
export const generateToken = () => (dispatch) => {
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
      console.log('generateToken action', result.data);

      dispatch({
        type: USER_DATA,
        payload: result.data,
      });
    })
    .catch((err) => {
      console.log('error occurred', err);
      dispatch({
        type: USER_DATA,
        payload: result.data,
      });
    });
};

export const login = (phone, token) => (dispatch) => {
  console.log('In LOgin User action', phone, token);

  // console.log('access_token in login action', access_token);
  const headers = {
    'app-version': '1.0',
    authorization: `Bearer ${token}`,
    'content-type': 'application/json',
  };
  axios
    .post(
      'https://evermed.in/rest/V1/vibcare/customer/login',
      {mobile_no: phone},
      {
        headers,
      },
    )
    .then((result) => {
      console.log('result In LOgin User action', result.data);

      dispatch({
        type: USER_LOGIN,
        payload: result.data,
      });
    })
    .catch((err) => {
      console.log('error occurred', err);
    });
};

export const refreshToken = (token) => (dispatch) => {
  // const headers = {
  //   'app-version': '1.0',
  //   authorization: `Bearer ${token}`,
  //   'content-type': 'application/json',
  // };
  axios
    .post(
      'https://evermed.in/rest/V1/vibcare/customer/refreshtoken',
      {refresh_token: token},
      // {
      //   headers,
      // },
    )
    .then((result) => {
      console.log('refresh_token action', result.data);
      dispatch({
        type: USER_DATA,
        payload: result.data,
      });
    })
    .catch((err) => {
      console.log('error occurred', err);
    });
};
