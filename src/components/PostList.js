import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';
import '../App.css';

function PostList(props) {
  return (
    <div className="postWrapper">
      <div className="postList">
        {props.items.map(item => (
          <Post post={item} comments={item.comments} />
        ))}
      </div>
    </div>
  );
}

PostList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PostList;
