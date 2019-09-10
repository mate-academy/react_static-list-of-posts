import React from 'react';
import PropTypes from 'prop-types';
import './PostList.scss';
import Post from '../Post/Post';

import users from '../../api/users';
import comments from '../../api/comments';

function PostList({ posts }) {
  return (
    <div className="post-list">
      {posts.map(post => (
        <Post
          key={post.id}
          post={post}
          user={users.find(item => item.id === post.userId)}
          comments={comments.filter(comment => comment.postId === post.id)}
        />
      ))}
    </div>
  );
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PostList;
