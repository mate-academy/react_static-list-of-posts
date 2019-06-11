import React from 'react';
import Post from './Post';
import {posts} from '../posts';
import {users} from '../users';
import CommentsList from './CommentsList';
import './PostList.css';

function PostsList () {

  return (

    posts.map((post) => {
    let user = users.find(item => post.userId === item.id);
      return (
        <div className="post" key={post.title}>
          <Post title={post.title} body={post.body} name={user} key={post.title}/>
          <div className="all-comments"><CommentsList id={post.id}/></div>
        </div>
      )
    })

  );
}

export default PostsList;
