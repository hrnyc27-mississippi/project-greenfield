import React from 'react';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { test } = this.props;
    return <h1>{test}</h1>;
  }
}

export default App;
