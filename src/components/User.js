import { Component } from 'react';

import classes from './User.module.css';

class User extends Component {
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }

  componentWillUnmount() {
    console.log('User will unmount');
  }
}

export default User;
