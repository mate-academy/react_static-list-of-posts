import React from 'react';
import PropTypes from 'prop-types';
import { CommnentList } from '../../CommentList';
import { User } from '../../User';

import './Post.scss';

export const Post = ({ post }) => (
  <>
    <li key={post.id} className="post">
      <p className="title">
        {post.title}
      </p>
      <p className="text">
        {post.body}
      </p>
      <User oneUser={post.user} />
      <CommnentList comments={post.comments} />
    </li>

  </>
);

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    comments: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
  }).isRequired,
};
