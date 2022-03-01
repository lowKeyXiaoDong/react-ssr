import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import routes from "../src/App";
import { Provider } from "react-redux";
import { getClientStore } from "../src/store/store";
import Header from "../src/component/Header";

const Page = (
  <Provider store={getClientStore()}>
    <BrowserRouter>
      <Header></Header>
      <Switch>
        {routes.map((route) => (
          <Route {...route}></Route>
        ))}
      </Switch>
    </BrowserRouter>
  </Provider>
);

if (window.__context) {
  // 进行注水
  ReactDom.hydrate(Page, document.getElementById("root"));
} else {
  // 进行render
  ReactDom.render(Page, document.getElementById("root"));
}
