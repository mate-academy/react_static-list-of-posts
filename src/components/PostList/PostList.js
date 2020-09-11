import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post/Post';
import { PostPropTypes } from '../../propTypes/PostPropTypes';
import { CommentPropTypes } from '../../propTypes/CommentPropTypes';
import { UserPropTypes } from '../../propTypes/UserPropTypes';
import './PostList.scss';

export function PostList({ posts, comments, users }) {
  return (
    <div className="post-list">
      {posts.map(post => (
        <Post key={post.id} post={post} comments={comments} users={users} />
      ))}
    </div>
  );
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape(PostPropTypes)).isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape(CommentPropTypes)).isRequired,
  users: PropTypes.arrayOf(PropTypes.shape(UserPropTypes)).isRequired,
};
