import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';
import { CommentList } from '../CommentList/CommentList';
import './Post.scss';
import { TypeUser, TypeComments } from '../../types';

export const Post = ({ title, body, user, comments }) => (
  <>
    <h2 className="post__header">{title.toUpperCase()}</h2>
    <p className="post__text">{body}</p>
    <User {...user} />
    <CommentList comments={comments} />
    <br />
  </>
);

Post.propTypes = {
  body: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  user: TypeUser.isRequired,
  comments: TypeComments.isRequired,
};
