import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

const PostList = ({ postUserComment }) => (
  <div className="list">
    {postUserComment.map(itemPost => <Post itemObj={itemPost} />)}
  </div>
);

PostList.propTypes
  = { postUserComment: PropTypes.arrayOf(PropTypes.object).isRequired };

export default PostList;
