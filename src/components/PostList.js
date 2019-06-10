import React from 'react';
import Post from './Post';
import CommentList from './CommentsList';
import {posts} from '../dataJSON/posts';
import {users} from '../dataJSON/users';

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
