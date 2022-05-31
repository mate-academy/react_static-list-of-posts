import React from 'react';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import { PreparedPost } from '../../react-app-env';

type Props = {
  post: PreparedPost,
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <article className="card content">
    <div className="box message is-info">
      <h2 className="message-header">{post.title}</h2>
      <p className="message-body">{post.body}</p>
      {post.user && (
        <div className="level-right">
          <UserInfo user={post.user} />
        </div>
      )}
    </div>
    <div className="m-6">
      <CommentList comments={post.comments} />
    </div>
  </article>
);
