import React from 'react';
import { PreparedPosts } from '../../react-app-env';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

interface Props {
  post: PreparedPosts,
}

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div data-cy="post-info" className="posts__post">
    <h3 data-cy="post-title"><b>{`Post: ${post.title}`}</b></h3>
    <p data-cy="post-body">{`Text: ${post.body}`}</p>
    {post.user && (
      <UserInfo user={post.user} />
    )}
    <CommentList comments={post.comments} />
  </div>
);

// 1. The `PostInfo` accepts a `post` object (with `user` and `comments`
// properties added before) and renders a `title`, a `body`, a `UserInfo` and a
// `CommentList`.
