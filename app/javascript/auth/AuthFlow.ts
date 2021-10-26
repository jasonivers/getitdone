const ClientOAuth2 = require("client-oauth2");
//import axios from "axios";

// Following block causes process undefined errors
/*const {
  GETITDONE_CLIENT_ID,
  GETITDONE_CLIENT_SECRET,
  GETITDONE_CLIENT_CALLBACK,
  NATIVE_TOKEN_URI,
  NATIVE_AUTH_URI,
} = process.env;*/

//http://localhost:3000/oauth/authorize?client_id=HWRC0-dE7YpfZOPH_sVjGX2f2Czuzzvco93ZnB9Ndds&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapp%2Foauth_callback&response_type=code&scope=

// Make these more consistent? i.e. pick NATIVE or GETITDONE for all? (I prefer the former)
const GETITDONE_CLIENT_ID = process.env.GETITDONE_CLIENT_ID;
const GETITDONE_CLIENT_SECRET = process.env.GETITDONE_CLIENT_SECRET;
const GETITDONE_CLIENT_CALLBACK = process.env.GETITDONE_CLIENT_CALLBACK;
const NATIVE_TOKEN_URI = process.env.NATIVE_TOKEN_URI;
const NATIVE_AUTH_URI = process.env.NATIVE_AUTH_URI;

export function initializeNativeAuth() {
  console.log("In initializeAuthFlow");

  // "native" is to distinguish from third-party auth solutions
  const nativeAuth = new ClientOAuth2({
    clientId: GETITDONE_CLIENT_ID,
    clientSecret: GETITDONE_CLIENT_SECRET,
    accessTokenUri: NATIVE_TOKEN_URI,
    authorizationUri: NATIVE_AUTH_URI,
    redirectUri: GETITDONE_CLIENT_CALLBACK,
    scopes: ['admin', 'read', 'write'], //These are random scopes I applied because it wouldn't work w/o any
  });

  return nativeAuth;

  //"urn:ietf:wg:oauth:2.0:oob"
  /*const queryParams = [
    `client_id=${GETITDONE_CLIENT_ID}`,
    `redirect_uri=${GETITDONE_CLIENT_CALLBACK}`,
    `response_type=${"code"}`,
  ].join("&");

  const requestUri = NATIVE_AUTH_URI + "?" + queryParams;
  return requestUri;*/
}

// Need to do something w/ refresh token
