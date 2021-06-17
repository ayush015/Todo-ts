import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { DashBoard } from "../DashBoard/Dashboard";
import { Login } from "../Login/Login";
export const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/todo" exact render={(props) => <DashBoard />} />
          <Route path="/login" exact render={(props) => <Login />} />
        </Switch>
      </BrowserRouter>
    </>
  );
};
