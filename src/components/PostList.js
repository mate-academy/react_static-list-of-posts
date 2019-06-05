import React from 'react';
import { posts } from '../posts';
import { users } from '../users';
import Post from './Post';

const mapOfUsers = new Map();
posts.forEach(post => {
  mapOfUsers.set(post.userId, users.find(user => user.id === post.userId));
});

function PostList() {
  const renderedPosts = [];

  posts.forEach(post => {
    renderedPosts.push(
      <Post
        title={post.title}
        body={post.body}
        key={post.title}
        name={mapOfUsers.get(post.userId).name}
        email={mapOfUsers.get(post.userId).email}
        adress={mapOfUsers.get(post.userId).address.street}
        postId={post.id}
      />
    );
  });
  return <section className='post-list'>{renderedPosts}</section>;
}

export default PostList;
