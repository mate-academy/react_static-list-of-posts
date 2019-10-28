import React from 'react';
import User from '../user/User';
import CommentList from '../commentList/CommentList';
import './post.css';

function Post({ post }) {
  const wide = Math.round(Math.random() * (410 - 390) + 390);
  const height = Math.round(Math.random() * (410 - 390) + 390);
  return (
    <div className="ui grid centered">
      <div className="ui card five wide column">
        <div className="image">
          <img src={`https://source.unsplash.com/${wide}x${height}/?man,girl,blog,posts,notes,fashion`} />
        </div>
        <div className="content">
          <div className="header">{post.title}</div>
          <User user={post.user}/>
          <div className="description">
            <p>{post.body}</p>
          </div>
        </div>
        <CommentList comment={post.comment} />
      </div>
    </div>
  );
}

export default Post;
