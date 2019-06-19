import React from 'react';
import Post from "./Post";
import {users} from '../users';
import {posts} from '../posts';
import User from "./User";
import CommentList from "./CommentList";
import '../App.css';

function PostList() {
  let listOfPosts = posts.map(item => {
    let user = users.find(user => user.id === item.userId);

    return (
      <li className="style" key={item.id}>
        <Post title={item.title} body={item.body}/>
        <User name={user.name} email={user.email} address={user.address}/>
        <CommentList id={item.id}/>
      </li>
    )
  });

  return (
    <ul>
      {listOfPosts}
    </ul>
  );
}

export default PostList;
