import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';
import { CommentList } from '../CommentList';
import { PostType } from '../../types';

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
  post: PropTypes.shape(PostType).isRequired,
};
