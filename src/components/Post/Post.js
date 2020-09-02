import React from 'react';
import './Post.scss';
import PropTypes from 'prop-types';
import { User } from '../User';
import { CommentList } from '../CommentList';

export const Post = ({ title, body, user, commentList }) => (
  <div className="posts__content">
    <h2 className="posts__title">{title.toUpperCase()}</h2>

    <article className="posts__text">{`" ${body} "`}</article>
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
