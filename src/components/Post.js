import React from 'react';
import User from './User';
import CommentList from "./CommentList";
import './Post.css';

const Post = ({ data }) => (
  <article className="post">
    <h2 className="title">{data.title}</h2>
    <p>{data.body}</p>
    <User data={data.user} />
    <CommentList data={data.comments} />
  </article>
);

export default Post;
