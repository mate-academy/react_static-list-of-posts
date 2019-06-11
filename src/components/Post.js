import React from 'react';
import User from './User';

function Post(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <p className="post-text">{props.body}</p>
      <User autor={props.name}/>
    </div>
  );
}

export default Post;
