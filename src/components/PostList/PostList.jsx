import React from 'react';
import PropTypes from 'prop-types';

import Post from '../Post/Post';
import CommentList from '../CommentList/CommentList';

const PostList = ({ list }) => (
  <>
    {list.map(post => (
      <div className="Post" key={post.id}>
        <Post {...post} />
        <CommentList {...post} />
      </div>
    ))}
  </>
);

PostList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};

export default PostList;
