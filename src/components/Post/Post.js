import React from 'react';
import { User } from '../User';
import { CommentList } from '../CommentList/CommentList';
import { TypePost } from '../../types';
import './Post.scss';

export const Post = ({ article }) => (
  <>
    <h2 className="post__header">{article.title.toUpperCase()}</h2>
    <p className="post__text">{article.body}</p>
    <User user={article.user} />
    <CommentList comments={article.comments} />
    <br />
  </>
);

Post.propTypes = TypePost;
