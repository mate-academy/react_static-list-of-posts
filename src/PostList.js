import PropTypes from 'prop-types';
import React from 'react';
import Post from './Post';

const PostList = props => (
  <dl>
    {props.posts.map(currentPost => (
      <Post post={currentPost} key={post.id} />
    ))}
  </dl>
);

PostList.propTypes
  = { posts: PropTypes.oneOfType([PropTypes.array]).isRequired };

export default PostList;
