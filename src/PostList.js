import React from 'react';
import comments from './api/comments';
import posts from './api/posts';
import users from './api/users';

import './styles/PostList.css';

import Post from './Post';

const PostList = () => {
  const postContainer = posts.map(post => ({
    post,
    user: users.find(user => user.id === post.userId),
    commentsList: comments.filter(comment => comment.postId === post.id),
  }));

  const postItem = postContainer.map((item) => {
    return (
      <Post
        key={item.post.id}
        post={item.post}
        user={item.user}
        commentsList={item.commentsList}
      />
    );
  });

  return (
    <div className="post-list">
      {postItem}
    </div>
  );
};

export default PostList;
