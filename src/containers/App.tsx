import React, { Component } from "react";
import { connect } from "react-redux";
import { setSearchField, requestRobots } from "../actions";

import MainPage from "../components/MainPage";

import "./App.css";

export interface IRobot {
  name: string;
  id: number;
  email: string;
}

export interface IAppProps {}

export interface IAppState {
  robots: Array<IRobot>;
  searchfield: string;
}

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
  };
};

class App extends Component<IAppProps, IAppState> {
  render() {
    return <MainPage {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
