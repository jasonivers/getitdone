const ClientOAuth2 = require('client-oauth2');
import axios from "axios";

const { GETITDONE_CLIENT_ID, GETITDONE_CLIENT_SECRET, GETITDONE_CLIENT_CALLBACK } = process.env;
// Note to self - what is the native_oauth_authorization route for? Should it be used for this?
const { NATIVE_TOKEN_URI, NATIVE_AUTH_URI } = process.env;

// "native" is to distinguish from third-party auth solutions
const nativeAuth = new ClientOAuth2({
  clientId: GETITDONE_CLIENT_ID,
  clientSecret: GETITDONE_CLIENT_SECRET,
  accessTokenUri: NATIVE_TOKEN_URI,
  authorizationUri: NATIVE_AUTH_URI,
  redirectUri: GETITDONE_CLIENT_CALLBACK,
  //scopes: [],
});

// Need to get token
