import React from 'react'; 
import { posts } from './posts.js';
import { users } from './users.js';
import Post from './Post.js';

function PostsList() {
  const allPosts = [];
  posts.forEach(post => { 
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
 
    allPosts.push(
      <Post 
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
  return allPosts;
}

export default PostsList;

