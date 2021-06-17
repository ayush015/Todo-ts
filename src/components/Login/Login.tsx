import * as React from "react";
import "./login.scss";
import { Button } from "@material-ui/core";
import logo from "../../assets/images/logo.png";
export const Login = () => {
  return (
    <div className="signInDiv">
      <a href="/api/v1/auth/linkedin">
        <Button>
          <img alt="linkedin logo" src={logo} />
          Sign in with LinkedIn
        </Button>
      </a>
    </div>
  );
};
