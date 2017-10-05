import React, {Component} from 'react';
import '../styles/index.css';
import {NavLink} from 'react-router-dom';

export default class BaseLayout extends Component {
  render() {
    return (
      <div className='layout'>
      <center>
      <nav>
        <NavLink to='/Home'>Home</NavLink>
        <NavLink to='/createPost'> Create Post </NavLink>
        <NavLink to='/postList'> See Posts </NavLink>
  </nav>
  </center>
      {this.props.children}
      </div>
    )
  }
}
