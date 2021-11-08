import React from 'react';
import { PreparedPost } from '../../types/types';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

export interface Prop {
  post: PreparedPost;
}

export const PostInfo: React.FC<Prop> = (props) => (
  <>
    <h2>{props.post.title}</h2>
    <p>{props.post.body}</p>
    <UserInfo user={props.post.user} />
    <ul>
      {props.post.comments.map(comment => (
        <li key={comment.id} className="post-info__item">
          <CommentInfo comment={comment} />
        </li>
      ))}
    </ul>
  </>
);
