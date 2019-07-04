import React from 'react';
import comments from './api/comments';
import posts from './api/posts';
import users from './api/users';

import './styles/PostList.css';

import Post from './Post';
import User from './User';
import CommentList from './CommentList';

const PostList = () => {
  const postContainer = posts.map(post => ({
    post,
    user: users.find(user => user.id === post.userId),
    commentsList: comments.filter(comment => comment.postId === post.id),
  }));

  const postItem = postContainer.map((item) => {
    return (
      <div className="post-list__item">
        <Post
          key={item.post.id}
          post={item.post}
        />
        <User
          key={item.user.id}
          user={item.user}
        />
        <CommentList
          key={item.commentsList.postId}
          commentsList={item.commentsList}
        />
      </div>
    );
  });

  return (
    <div className="post-list__container">
      {postItem}
    </div>
  );
};

export default PostList;
