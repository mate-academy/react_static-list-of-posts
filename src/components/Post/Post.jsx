import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';
import { CommentList } from '../CommentList';
import { PostType, UserType, CommentType } from '../../types';

export const Post = ({ post }) => (
  <>
    <h1>
      {post.title}
    </h1>
    <p>
      {post.body}
    </p>
    <User user={post.user} />
    <CommentList comments={post.comments} />
  </>
);

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    PostType,
    user: PropTypes.shape({ UserType }).isRequired,
    comments: PropTypes.arrayOf(
      PropTypes.shape({ CommentType }),
    ).isRequired,
  }).isRequired,
};
