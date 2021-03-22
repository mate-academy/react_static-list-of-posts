import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';
import { CommentList } from '../CommentList/CommentList';

import './Post.scss';

export const Post = ({post}) => (
  <div className="post">
    <User props={post.user} />
    <hr />
    <h2 className="post__header">{post.title}</h2>
    <p className="post__message">{post.body}</p>
    <div className="comment">
      <CommentList comments={post.comments} />
    </div>
    <hr />
  </div>
);

Post.propTypes = {
  post: PropTypes.shape({
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }),
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        body: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
      })
    ),
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }),
};
