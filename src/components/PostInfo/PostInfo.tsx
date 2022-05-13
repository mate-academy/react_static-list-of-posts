import React from 'react';
import './PostInfo.scss';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';
import { Post } from '../../types/Post';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="post-info">
    <div className="post-title" data-cy="post-title">
      {`< ${post.title} >`}
    </div>
    <div data-cy="post-body">{post.body}</div>
    <p className="add-info">User Info:</p>
    {post.user && <UserInfo user={post.user} />}
    <p className="add-info">Comments:</p>
    {post.comments.length > 0 && (
      <CommentList comments={post.comments} />
    )}
  </div>
);
