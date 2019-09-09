import React from 'react';
import PropTypes from 'prop-types';
import './PostList.scss';
import Post from '../Post/Post';

import users from '../../api/users';
import comments from '../../api/comments';

function PostList({ posts }) {
  return (
    <div className="post-list">
      {posts.map((post) => {
        const user = users.find(item => item.id === post.userId);
        const commentList = comments
          .filter(comment => comment.postId === post.id);

        return (
          <Post key={post.id} post={post} user={user} comments={commentList} />
        );
      })}
    </div>
  );
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PostList;
