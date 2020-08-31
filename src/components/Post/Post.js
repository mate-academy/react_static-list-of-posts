import React from 'react';
import { User } from '../User/User';
import { CommentList } from '../CommentList/CommentList';
import './Post.css';
import { PostShape } from '../Shape';

export const Post = ({ id, title, body, user, comments }) => (
  <>
    <p className="postId">{id}</p>
    <p className="user">
      <User {...user} />
    </p>
    <p className="postTitle">{title}</p>
    <p className="postBody">{body}</p>
    <CommentList comments={comments} />
  </>
);

Post.propTypes = PostShape.isRequired;
