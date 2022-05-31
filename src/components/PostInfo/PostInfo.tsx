import React from 'react';
import './PostInfo.scss';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';
import { FullPost } from '../../react-app-env';

type Props = {
  post: FullPost
};
export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="post-info" data-cy="post-info">
    <p className="post-info__tittle" data-cy="post-title">
      {`Post: ${post.title}`}
    </p>
    <p data-cy="post-body">
      {post.body}
    </p>
    {post.user && <UserInfo user={post.user} /> }
    {post.comments && <CommentList comments={post.comments} />}
  </div>
);
