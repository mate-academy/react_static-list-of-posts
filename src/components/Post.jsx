import React from 'react';
import PropTypes from 'prop-types';
import { User } from './User';
import './Post.css';
import { TypeUser } from '../types';

export const Post = ({ title, body, user }) => (
  <div className="card text-center">
    <div className="card-header">
      <b>{title}</b>
    </div>
    <div className="card-body">
      <p>{body}</p>
      <User user={user} />
    </div>
  </div>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: TypeUser.isRequired,
};
