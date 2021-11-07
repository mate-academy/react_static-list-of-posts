import React from 'react';
import { Posts } from '../../types/types';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentInfo } from '../CommentInfo/CommentInfo';

interface Props {
  postItem: Posts,
}

export const PostInfo: React.FC<Props> = ({ postItem }) => (
  <li className="post__item">
    <h2 className="post__title">{postItem.title}</h2>
    <p className="post__body">{postItem.body}</p>
    {postItem.user ? <UserInfo user={postItem.user} /> : null }
    <h2 className="comments__title">Comments</h2>
    {postItem.comments
      ? postItem.comments.map((comment) => <CommentInfo comment={comment} key={comment.id} />)
      : 'Some comment..'}
  </li>
);
