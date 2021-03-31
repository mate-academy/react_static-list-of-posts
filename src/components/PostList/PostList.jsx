import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post';
import { PostType } from '../Post/Post';

export const PostList = ({ postList }) => (
  <div className="PostList">
    {postList.map(post => (
      <Post
        key={post.id}
        title={post.title}
        body={post.body}
        user={post.user}
        commentsList={post.commentsList}
      />
    ))}
  </div>
);

PostList.propTypes = {
  postList: PropTypes.arrayOf(
    PropTypes.shape(PostType),
  ).isRequired,
};
