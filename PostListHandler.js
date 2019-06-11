import React from 'react'; 
import { posts } from './posts.js';
import { users } from './users.js';
import PostHandler from './PostHandler.js';
 
function PostsListHandler() {
  const postsList = [];
  posts.map(post => {
    const postTitle = post.title;
    const postBody = post.body;
    const postUser = users.find(user => user.id === post.userId);
    const userName = postUser.name;
    const userAddress = postUser.address.city;
    const userEmail = postUser.email;
    const postId = post.id;
    postsList.push(
      <PostHandler 
        key={postId}
        postId={postId}
        title={postTitle}
        body={postBody}
        userName={userName}
        userEmail={userEmail}
        userAddress={userAddress}
      />
    );
  });
  return postsList;
}

export default PostsListHandler;

