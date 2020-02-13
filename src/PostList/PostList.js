import React from 'react';
import PropTypes from 'prop-types';
import Post from '../Post/Post';

const PostList = ({ postlist }) => (
  <div>
    {postlist.map(post => (
      <Post key={post.id} {...post} />
    ))}
  </div>
);

PostList.propTypes = {
  postlist: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default PostList;
