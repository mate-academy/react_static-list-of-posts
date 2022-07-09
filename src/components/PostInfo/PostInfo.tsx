import React from 'react';
import { Post } from '../../types/Post';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div data-cy="post-info">
    <h2 data-cy="post-title">{post.title}</h2>
    <p
      className="content is-large"
      data-cy="post-body"
    >
      {post.body}
    </p>
    {post.user ? <UserInfo user={post.user} /> : null}
    <h3>{`${post.comments?.length} comments:`}</h3>
    {post.comments ? <CommentList comments={post.comments} /> : null}
  </div>
);
