import React from 'react';
import { PostType } from '../Types/Type';
import User from '../User/User';
import CommentList from '../CommentList/CommentList';

const Post = ({ title, body, author, comments }) => (

  <article>
    <h2>
      {title}
    </h2>
    <p>
      {body}
    </p>
    <User {...author} />
    <CommentList comments={comments} />
  </article>
);

Post.propTypes = PostType.isRequired;

export default Post;
