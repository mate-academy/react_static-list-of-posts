import React from 'react';
import '../App.css';

function Post(props) {
  return (
    <div>
      <h2 className="post-title">{props.title}</h2>
      <div className="post-body">{props.body}</div>
    </div>
  )
}

export default Post;