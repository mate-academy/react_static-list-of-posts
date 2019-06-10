import React from 'react';
import User from './User';

function Post(props) {
  return (
    <div className="post">
      <h2>{props.title}</h2>
      <p className="text">{props.text}</p>
      <User author={props.user}/>
    </div>
  )
}

export default Post;
