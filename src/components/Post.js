import React from 'react';

import './post.scss';

import User from "./User";

const Post = ( {post} ) => (
  <article className="post">
    <User user={post.user}/>
    <hr/>
    <h4>
      {post.title}
    </h4>
    <div className="post__content">
      {post.body}
    </div>
    <hr/>
  </article>
);
export default Post;
