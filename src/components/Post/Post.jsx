import React from 'react';
import { PostType } from '../../types';
import { User } from '../User';
import { CommentList } from '../CommentList';
import './post.scss';

export const Post = ({ title, body, user, comments }) => (
  <div className="box">
    <h2 className="title is-1 centered">{title}</h2>
    <User {...user} />
    <p className="subtitle is-3">{body}</p>
    <hr />
    <CommentList comments={comments} />
  </div>
);

Post.propTypes = PostType.isRequired;
