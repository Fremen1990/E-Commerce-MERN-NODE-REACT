import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./core/Home";
import SignUp from "./user/SignUp";
import SignIn from "./user/SignIn";
import PrivateRoute from "./auth/PrivateRoute";
import Dashboard from "./user/userDashboard";
import AdminRoute from "./auth/AdminRoute";
import AdminDashboard from "./user/AdminDashboard";
import AddCategory from "./admin/AddCategory";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/signin" exact component={SignIn}></Route>
        <Route path="/signup" exact component={SignUp}></Route>
        <PrivateRoute path="/user/dashboard" exact component={Dashboard} />
        <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
        <AdminRoute path="/create/category" exact component={AddCategory} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
