import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post';
import { UserType, CommentType } from '../../type';
import './PostList.css';

export const PostList = ({ prepPosts }) => (
  <div className="postList">
    {prepPosts.map(post => (
      <div key={post.id} className="post">
        <Post post={post} />
      </div>
    ))}
  </div>
);

PostList.propTypes = {
  prepPosts: PropTypes.arrayOf({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    user: UserType.isRequired,
    comments: PropTypes.arrayOf(CommentType).isRequired,
  }).isRequired,
};
