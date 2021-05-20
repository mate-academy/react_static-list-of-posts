import React from 'react';
import PropTypes from 'prop-types';

import Post from '../Post/Post';
import CommentList from '../CommentList/CommentList';

import comments from '../../api/comments';

const PostList = ({ posts }) => (
  <>
    {posts.map(post => (
      <div className="Post" key={post.id}>
        <Post {...post} />
        <CommentList comments={comments} />
      </div>
    ))}
  </>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};

export default PostList;
