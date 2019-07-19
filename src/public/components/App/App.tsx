import React from "react";
import { Route, BrowserRouter, Link } from "react-router-dom";
import { Foo } from "./Foo";
import { Bar } from "./Bar";
import { Baz } from "./Baz";

export const App = () => {
  return <BrowserRouter>
  <div>
    <Link style={{margin: "8px"}} to="/foo">foo</Link>
    <Link style={{margin: "8px"}} to="/bar">bar</Link>
    <Link style={{margin: "8px"}} to="/baz">baz</Link>
  </div>
    <Route path="/foo" component={Foo} />
    <Route path="/bar" component={Bar} />
    <Route path="/baz" component={Baz} />
  </BrowserRouter>
}
