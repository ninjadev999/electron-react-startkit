import { RSAA } from 'redux-api-middleware';
import apiConfig from '../constants/api';
import * as types from './actionTypes';

export const getProfile = () => ({
  [RSAA]: {
    endpoint: `${apiConfig.url}/api/v1/user`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    types: [
      types.GET_PROFILE.REQUEST,
      types.GET_PROFILE.SUCCESS,
      types.GET_PROFILE.FAILURE
    ]
  }
});

export default getProfile;
