import React from 'react';
import { Post } from '../../types/Post';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentInfo } from '../CommentInfo/CommentInfo';

interface Props {
  postItem: Post,
}

export const PostInfo: React.FC<Props> = ({ postItem }) => (
  <li className="PostItem">
    <h2 className="PostItem__title">{postItem.title}</h2>
    <p className="PostItem__body">{postItem.body}</p>
    {postItem.user ? <UserInfo user={postItem.user} /> : null}
    <h2 className="Comments__title">Comments</h2>
    {postItem.comments
      ? postItem.comments.map((comment) => <CommentInfo comment={comment} key={comment.id} />)
      : 'Comment...'}
  </li>
);
