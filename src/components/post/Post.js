import React from 'react';
import User from '../user/User';
import CommentList from '../commentList/CommentList';
import './post.css';

function Post({ post }) {
  return (
    <div className="ui grid centered">
      <div className="ui card five wide column">
        <div className="image">
          <img src={`https://source.unsplash.com/${Math.round(Math.random() * (410 - 390) + 390)}x${Math.round(Math.random() * (410 - 390) + 390)}/?man,girl,blog,posts,notes,fashion`} />
        </div>
        <div className="content">
          <div className="header">{post.title}</div>
          <User user={post.user}/>
          <div className="description">
            <p>{post.body}</p>
          </div>
        </div>
        <CommentList comment={post.comment} key={post.comment.id} />
      </div>
    </div>
  );
}

export default Post;
