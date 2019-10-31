import React from 'react';
import './post.css'

const Post = ({ post, user, children }) => (
  <article className="post__container">
    <h2 className="post__title">{post.title}</h2>
    <p className="post__body">{post.body}</p>
    <span className="post__author">{`${user.name}`}</span>
    {children}
  </article>
)

export default Post;
