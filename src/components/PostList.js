import React from 'react';
import PropTypes from 'prop-types';

import Post from './Post';
import './PostList.css';

const PostList = (props) => {
  const postBlock = props.postAllInfo.map(post => (
    <Post key={post.id} post={post} />
  ));

  return (
    <div className="post-list">
      <h1>Static list of posts</h1>
      {postBlock}
    </div>
  );
};

PostList.propTypes = {
  postAllInfo: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.object])).isRequired,
};

export default PostList;
