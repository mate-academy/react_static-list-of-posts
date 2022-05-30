import React from 'react';
import { PreparedData } from '../../react-app-env';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import './PostInfo.scss';

export interface Props {
  post: PreparedData;
}

export const PostInfo: React.FC<Props> = ({ post }) => (
  <>
    <div data-cy="post-info" className="box">
      <p data-cy="post-title" className="box notification is-danger title is-5">{`TITLE: ${post.title}`}</p>
      <p data-cy="post-body" className="box message-body">{post.body}</p>
      {post.user && (
        <UserInfo user={post.user} />
      )}
      <CommentList comments={post.comments} />
    </div>
  </>
);
