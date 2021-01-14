import React from 'react';
import { User } from '../User';
import { CommentList } from '../CommentList/CommentList';
import { TypePost } from '../../types';

export const Post = ({ article }) => (
  <>
    <h2>{article.title.toUpperCase()}</h2>
    <p>{article.body}</p>
    <User user={article.user} />
    <CommentList comments={article.comments} />
    <br />
  </>
);

Post.propTypes = TypePost;
