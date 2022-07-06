import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';
import { Post } from '../../types/Post';
import { CommentList } from '../CommentList/CommentList';

export type Props = {
  post: Post,
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <>
    <h2 className="post-title" data-cy="post-title">
      {post.title}
    </h2>
    <p className="post-body" data-cy="post-body">
      {post.body}
    </p>
    <div className="user-info">
      {post.user ? (
        <UserInfo user={post.user} />
      ) : (
        <h2>Anonimous</h2>
      )}

    </div>
    <ul className="comment-list">
      <CommentList comments={post.comments} />
    </ul>
  </>
);
