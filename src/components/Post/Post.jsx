import React from 'react';
import './Post.scss';
import PropTypes from 'prop-types';
import { User } from '../User/User';
import { CommentList } from '../CommentList/CommentList';

export const Post = ({ title, body, user, commentList }) => (
  <div className="post">
    <h2 className="post__title">{title}</h2>

    <article className="post__text">
      {body}
    </article>
    <User {...user} />
    <CommentList comments={commentList} />
  </div>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape().isRequired,
  commentList: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
