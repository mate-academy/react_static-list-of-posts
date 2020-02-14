import React from 'react';
import PropTypes from 'prop-types';
import './Post.css';
import { User } from '../User/User';
import { CommentList } from '../CommentList/CommentList';

export function Post({ post }) {
  const { title, body, user, comments } = post;

  return (
    <div className="post">
      <h3 className="post__title">{title}</h3>
      <hr className="post__line" />
      <p className="post__text">{body}</p>
      <User {...user} />
      <h3 className="post__comments_title">Comments</h3>
      <CommentList key={post.id} comments={comments} />
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    comments: PropTypes.array.isRequired,
    user: PropTypes.object.isRequired,
  }).isRequired,
};
