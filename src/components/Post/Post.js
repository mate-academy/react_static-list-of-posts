import React from 'react';
import Commentlist from '../Commentlist/Commentlist';
import User from '../User/User';
import './post.css';

function Post(props) {
  const {post, user, comment} = props;
  return (
    <div className="post">
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <User user={user} />
      <Commentlist comment={comment} />
    </div>
  );
}

export default Post;
