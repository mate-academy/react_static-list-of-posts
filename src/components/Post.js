import React from 'react';
import './post.scss';
import User from "./User";

const Post = ({ postData }) => (
  <article className="post">
    <User user={postData.user}/>
    <hr/>
    <h4>
      {postData.title}
    </h4>
    <div className="post__content">
      {postData.body}
    </div>
    <hr/>
  </article>
);
export default Post;
