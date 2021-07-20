import React from 'react';
import PropTypes from 'prop-types';
import { User, UserTypes } from '../User';
import { CommentList } from '../CommentList';
import { CommentTypes } from '../Comment';

export const Post = ({ title, body, user, comments }) => (
  <>
    <h1>{title}</h1>
    <p>{body}</p>
    <span>
      <User
        name={user.name}
        email={user.email}
        address={user.address}
      />
    </span>
    <CommentList comments={comments} />
  </>

);

export const PostTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape(UserTypes).isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape(CommentTypes),
  ).isRequired,
};

Post.propTypes = PostTypes;
