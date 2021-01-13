import React from 'react';
import { CommentList } from '../CommentList';
import { User } from '../User';
import { PostType } from '../../types';
import './Post.scss';

export const Post = ({ title, body, name, email, address, commenters }) => (
  <div className="post">
    <h2>{title}</h2>
    <p>{body}</p>
    <User userName={name} userEmail={email} userAddress={address} />
    <CommentList comments={commenters} />
  </div>
);

Post.propTypes = PostType;
