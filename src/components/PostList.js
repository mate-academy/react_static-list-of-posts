import React from 'react';

import posts from '../api/posts';
import comments from '../api/comments';
import users from '../api/users';
import Post from './Post';

const PostList = () => {
  let currentUser = {};

  const postsList = posts
    .map(post => {
      if (currentUser.id !== post.userId) {
        currentUser = users.find(user => user.id === post.userId);
      }

      return {
        ...post,
        comments: comments.filter(comment => comment.postId === post.id),
        user: currentUser,
      };
    })
    .map(postData => <Post data={postData} />);

  return (<div className="post-list">{postsList}</div>);
};

export default PostList;
