import { fromJS } from 'immutable';
import { handleOauthRequest } from './oauth';

/* eslint import/prefer-default-export: 0 */
export function setOauth(oauth) {
  try {
    localStorage.setItem('oauth', JSON.stringify(handleOauthRequest(oauth)));
  } catch (e) {
    console.warn(e);
  }
}

export function getOauth() {
  try {
    return fromJS(JSON.parse(localStorage.getItem('oauth')));
  } catch (e) {
    console.warn(e);
  }
  return null;
}
