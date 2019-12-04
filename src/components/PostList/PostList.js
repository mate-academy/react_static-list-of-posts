import React from 'react';
import './PostList.scss';
import { PostListProps } from '../../constants/proptypes';
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

PostList.propTypes = PostListProps;

export default PostList;
