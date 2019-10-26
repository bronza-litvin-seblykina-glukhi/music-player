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

export function removeOauth() {
  try {
    localStorage.removeItem('oauth');
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

export function setRememberMe(value) {
  localStorage.setItem('rememberMe', value);
}

export function getRememberMe() {
  return localStorage.getItem('rememberMe') === 'true';
}

export function setLastTab(value) {
  localStorage.setItem('lastTab', value);
}

export function getLastTab() {
  return localStorage.getItem('lastTab');
}

export function incrementCountOfTabs() {
  const countOfTabs = Number.parseInt(localStorage.getItem('countOfTabs'), 10);

  if (!countOfTabs || countOfTabs < 0) {
    localStorage.setItem('countOfTabs', '1');
  } else {
    localStorage.setItem('countOfTabs', `${countOfTabs + 1}`);
  }

  return localStorage.getItem('countOfTabs') === 'true';
}

export function decrementCountOfTabs() {
  const countOfTabs = Number.parseInt(localStorage.getItem('countOfTabs'), 10);

  if (!countOfTabs || countOfTabs < 0) {
    localStorage.setItem('countOfTabs', '0');
  } else {
    localStorage.setItem('countOfTabs', `${countOfTabs - 1}`);
  }
}

export function getCountOfTabs() {
  return localStorage.getItem('countOfTabs');
}

export function getLastActiveRoom() {
  return localStorage.getItem('lastActiveRoom');
}

export function setLastActiveRoom(value) {
  return localStorage.setItem('lastActiveRoom', value);
}

export function clearStorage() {
  localStorage.removeItem('lastActiveRoom');
  localStorage.removeItem('drafts');
  localStorage.removeItem('rememberMe');
}
