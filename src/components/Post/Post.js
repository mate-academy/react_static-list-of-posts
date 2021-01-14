import React from 'react';

import User from '../User/User';
import CommentList from '../CommentList/CommentList';
import { PostShape } from '../shapes';

const Post = ({ user, title, body, comments }) => (
  <article>
    <h2>{title}</h2>
    <p>{body}</p>
    <User {...user} />
    <CommentList commentList={comments} />
  </article>
);

Post.propTypes = PostShape.isRequired;

export default Post;
