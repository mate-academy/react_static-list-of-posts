import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

// eslint-disable-next-line react/prop-types
function PostList({ postsListArr }) {
  return (
    <div className="post__item">
      {postsListArr.map(post => <Post post={post} key={post.id} />)}
    </div>
  );
}

PostList.propType = { postsListArr: PropTypes.object.isRequired };

export default PostList;
