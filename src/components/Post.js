import React from 'react';
import PropTypes from 'prop-types';
import users from '../api/users';
import { User } from './User';

export const Post = ({ title, body, id, userId }) => (
  <>
    Title:
    {title}
    <br />
    Body:
    {body}
    <>
      <User
        postID={id}
        {...users.find(user => user.id === userId)}
      />
    </>
  </>
);

Post.propTypes = {
  id: PropTypes.number.isRequired,
  userId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
