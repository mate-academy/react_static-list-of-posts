import React from 'react';
import { TypePost } from '../../types';

import { User } from '../User';
import { CommentList } from '../CommentList';
import './Post.scss';

export const Post = ({ postItem }) => (
  <div>
    <h2 className="post-tile__title">{postItem.title}</h2>
    <p className="post-tile__body">{postItem.body}</p>
    <User user={postItem.user} />
    <CommentList userComments={postItem.comment} />
  </div>
);

Post.propTypes = TypePost.isRequired;
