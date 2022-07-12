import React from 'react';
import { Post } from '../../Types/Post';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

type Props = {
  postInfo: Post;
};

export const PostInfo: React.FC<Props> = ({ postInfo }) => (
  <div className="card" data-cy="post-info">
    <h2 data-cy="post-title">{postInfo.title}</h2>
    <p data-cy="post-body">{postInfo.body}</p>
    {postInfo.user && (
      <UserInfo
        name={postInfo.user.name}
        email={postInfo.user.email}
      />
    )}
    <CommentInfo comments={postInfo.comments} />
  </div>
);
