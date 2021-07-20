import React from 'react';
import PropTypes from 'prop-types';

import { Post } from '../Post/Post';

export const PostList = ({ postsList }) => (
  <div className="posts">
    {postsList.map(post => (
      <div className="posts__post" key={post.id}>
        <Post
          title={post.title}
          body={post.body}
          author={post.author}
          comments={post.comments}
        />
      </div>
    ))}
  </div>
);

PostList.propTypes = {
  postsList: PropTypes.arrayOf(
    PropTypes.shape({}),
  ),
};

PostList.defaultProps = {
  postsList: [],
};
