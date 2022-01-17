import * as React from 'react';
import { ReadyPost } from '../../types';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';
import './PostInfo.scss';

type Props = {
  post: ReadyPost,
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="post-info">
    <h1 className="post-info__title">
      {post.title}
    </h1>
    <p className="post-info__text">
      {post.body}
    </p>
    {
      post.user && (
        <UserInfo user={post.user} />
      )
    }
    {
      post.comments && post.comments.map(comment => (
        <CommentList comment={comment} key={comment.id} />
      ))
    }
  </div>
);
