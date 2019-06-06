import React from 'react';
import Post from './Post';
import CommentList from './CommentList';
import {posts} from '../posts';
import {users} from '../users';

function PostList() {
  return posts.map((postsItem) => {
    const user = users.find(usersItem => postsItem.userId === usersItem.id);
    return (
      <article key={postsItem.title}>
        <Post title={postsItem.title} text={postsItem.body} user={user}/>
        <strong>Comments:</strong>
        <CommentList id={postsItem.id}/>
      </article>
    )
  })
}

export default PostList;
