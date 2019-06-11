import { WebAuth } from 'auth0-js';

const auth0 = new WebAuth({
  domain: 'dev-wchee1uk.auth0.com',
  clientID: 'DUy2S3C2WHVPNTCH3N55dx17DsWJyFFd',
  redirectUri: 'https://determined-cray-322a33.netlify.com/callback',
  responseType: 'token id_token',
  scope: 'openid profile'
});

export const login = () => {
  auth0.authorize();
};

export const handleAuth = () => {
  return new Promise((resolve, reject) => {
    auth0.parseHash((error, results) => {
      if(results &&  results.accessToken && results.idToken) {
        auth0.client.userInfo(results.accessToken, (err, profile) => {
          if(err) return reject('Could not get profile');
          resolve({
            username: profile.name,
            token: results.accessToken,
            image: profile.picture
          });
        });
      } else {
        reject('Could not log in');
      }
    });
  });
};
