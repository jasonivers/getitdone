import * as React from "react";
//import { useHistory } from "react-router-dom";
import { initializeNativeAuth } from "../../auth/AuthFlow";

import { Container, CssBaseline, Button } from "@mui/material";

const Home: React.FunctionComponent = () => {
  //let history = useHistory();

  const handleSignIn = React.useCallback(async () => {
    console.log("In handleSignIn");
    const nativeAuth = initializeNativeAuth();
    console.log("Native auth object", nativeAuth);

    const uri = nativeAuth.code.getUri();
    console.log("redirect uri", uri);
    //window.location.replace(uri);
    window.location.href = uri;

  }, []);

  return (
    <Container>
      <CssBaseline />
      <h1>Getitdone</h1>
      <Button type="button" variant="contained" onClick={handleSignIn}>Sign in!</Button>
    </Container>
  )
}

export default Home;