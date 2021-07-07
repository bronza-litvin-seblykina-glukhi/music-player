/* eslint import/prefer-default-export: 0 */
export function handleOauthRequest(oauth) {
  const newOauth = oauth;
  newOauth.expires_date = (oauth.expires_in * 1000) + new Date().getTime();
  return newOauth;
}
