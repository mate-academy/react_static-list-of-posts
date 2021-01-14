import React from 'react';
import './PostList.scss';
import PropTypes from 'prop-types';
import Post from '../Post';

function PostList({ compressedData }) {
  return (
    <>
      {compressedData.map(post => (
        <div className="postStyle" key={post.id}>
          <Post
            {...post}
          />
        </div>
      ))}
    </>
  );
}

PostList.propTypes = {
  compressedData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PostList;
