import React from 'react';
import './PostInfo.scss';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';
import { Post } from '../../types';

type PostInfoProps = {
  post: Post;
};

export const PostInfo: React.FC<PostInfoProps> = (props) => {
  return (
    <div data-cy="post-info">
      <h1 data-cy="post-title">
        {props.post.title}
      </h1>
      <div data-cy="post-body">
        {props.post.body}
      </div>
      <UserInfo user={props.post.user} />
      <CommentList comments={props.post.comments} />
    </div>
  );
};
