import React from 'react'; 
import { posts } from './posts.js';
import { users } from './users.js';
import PostHandler from './PostHandler.js';

function PostsListHandler() {
  const postsList = [];
  posts.map(post => { 
    const {
      title: postTitle,
      body: postBody,
      id: postId
    } = post;

    const postUser = users.find(user => user.id === post.userId);
    const {
      name: userName,
      address: {street, suite, city},
      email: userEmail
    } = postUser;
 
    postsList.push(
      <PostHandler 
        key={postId}
        postId={postId}
        title={postTitle}
        body={postBody}
        userName={userName}
        userEmail={userEmail}
        userAddress={city}
      />
    );
  });
  return postsList;
}

export default PostsListHandler;

