import React from 'react';
import PropTypes from 'prop-types';
import { CommentList } from '../CommentList/CommentList';
import { User } from '../User/User';
import { CommentType, UserAddressType } from '../../types';
import './Post.css';

export const Post = ({ title, body, user, comments }) => (
  <>
    <h2 className="post__title">{title}</h2>
    <p className="post__body">{body}</p>
    <User
      name={user.name}
      email={user.email}
      address={user.address}
    />
    <CommentList comments={comments} />
  </>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape(UserAddressType),
  }).isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape(CommentType),
  ).isRequired,
};
