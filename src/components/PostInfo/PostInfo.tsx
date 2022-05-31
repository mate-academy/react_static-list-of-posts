import React from 'react';
import { FullPosts } from '../../react-app-env';
import { CommentList } from '../CommentList/CommentList';
import './PostInfo.scss';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  post: FullPosts;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div data-cy="post-info">
    <h2 data-cy="post-title" className="item__title">{`Title - ${post.title}`}</h2>
    <p data-cy="post-body">{post.body}</p>
    {
      post.user
        && (
          <UserInfo
            user={post.user}
          />
        )
    }
    {
      post.comments
      && (
        <CommentList comments={post.comments} />
      )
    }
  </div>

);
