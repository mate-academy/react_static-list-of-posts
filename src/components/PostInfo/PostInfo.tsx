import React from 'react';
import { PreparedPosts } from '../../react-app-env';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

interface Props {
  post: PreparedPosts
}

export const PostInfo: React.FC<Props> = ({ post }) => (
  <>
    <h1
      className="is-size-1 has-text-centered"
      data-cy="post-title"
    >
      {post.title}
    </h1>
    <div data-cy="post-body">
      <p className="is-size-3">{post.body}</p>
      {post.user && <UserInfo user={post.user} />}
      <CommentList commetsArray={post.comments} />
    </div>
  </>
);
