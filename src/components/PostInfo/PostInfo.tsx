import React from 'react';
import { FullPost } from '../../react-app-env';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

type Props = {
  posts: FullPost[];
};

export const PostInfo: React.FC<Props> = ({ posts }) => (
  <div data-cy="post-info" className="message is-primary">
    {posts.map(post => (
      <React.Fragment key={post.id}>
        <div className="message-header">
          <div>{post.title}</div>
          <div>{post.body}</div>
        </div>
        {post.user && <UserInfo user={post.user} />}
        <CommentList post={post} />
      </React.Fragment>
    ))}
  </div>
);
