import React from 'react';
import '../App.css';
import Post from './Post';
import User from './User';
import CommentList from './CommentList'

function PostList(props) {
  return (
    <div className="post-list">
      {props.posts.map(post => (
        <div
          className="post"
          key={post.id}
        >
          <User
            name={post.user.name}
            email={post.user.emai}
            city={post.user.address.city}
            street={post.user.address.street}
            suite={post.user.address.suite}
          />
          <Post
            title={post.title}
            body={post.body}
          />
          <CommentList
            numberComments={post.comments.length}
            comments={post.comments}
          />
        </div>
      ))}
    </div>
  )
}

export default PostList;