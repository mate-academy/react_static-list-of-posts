import React from 'react';
import PropTypes from 'prop-types';
import { TypeUser, TypeComment } from '../types';
import { User } from './User';

export const Post = ({ title, body, user, comments }) => (
  <>
    Title:
    {title}
    <br />
    Body:
    {body}
    <>
      <User
        {...user}
        comments={comments}
      />
    </>
  </>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: TypeUser.isRequired,
  comments: PropTypes.arrayOf(TypeComment).isRequired,
};
