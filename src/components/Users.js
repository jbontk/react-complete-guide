import { Component } from 'react';
import User from './User';

import classes from './Users.module.css';


class Users extends Component {
  constructor() {
    super();

    // !! State is ALWAYS AN OBJECT in class-based components !! (!= functional components)
    this.state = {
      showUsers: true,
    };
  }

  toggleUsersHandler() {
    this.setState((currentState) => ({ showUsers: !currentState.showUsers }));
    // OR, alternative syntax when not dependent on the previous state:   ** this.setState({showUsers: false}); **
  }

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

export default Users;
