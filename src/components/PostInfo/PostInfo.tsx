import React from 'react';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import { PreparedPost } from '../../react-app-env';

type Props = {
  post: PreparedPost,
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <article data-cy="post-info" className="card content">
    <div className="box message is-info">
      <h2 data-cy="post-title" className="message-header">{post.title}</h2>
      <p data-cy="post-body" className="message-body">{post.body}</p>
      {post.user && (
        <div key={post.user.id} className="level-right">
          <UserInfo user={post.user} />
        </div>
      )}
    </div>
    <div className="m-6">
      <CommentList comments={post.comments} />
    </div>
  </article>
);
