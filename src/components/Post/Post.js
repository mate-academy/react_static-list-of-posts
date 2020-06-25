import React from 'react';
import { User } from '../User/User';
import { CommentList } from '../CommentList/CommentList';
import { PostShape } from '../Shape';

export const Post = props => (
  <div>
    <h1>
      {props.title}
    </h1>
    <p>
      <User {...props.user} />
    </p>
    <p>
      {props.body}
    </p>
    <ol>
      <CommentList commentList={props.comments} />
    </ol>
  </div>
);

Post.propTypes = PostShape.isRequired;
