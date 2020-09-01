import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';
import CommentList from './CommentList';

import comments from '../api/comments';

const PostList = ({ posts }) => (
  <>
    {posts.map(post => (
      <div key={post.id} className="post">
        <Post {...post} />
        <CommentList
          {...comments.filter(comment => comment.postId === post.id)}
        />
      </div>
    ))}
  </>
);

PostList.propTypes = {
  posts: PropTypes.shape({
    id: PropTypes.number.isRequired,
    map: PropTypes.object,
  }).isRequired,
};

export default PostList;
