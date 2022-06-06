import React from 'react';
import './PostInfo.scss';
import { PreparedPosts } from '../../types';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

interface Props {
  post: PreparedPosts;
}

export const PostInfo: React.FC<Props> = ({ post }) => (
  <>
    <div className="post" data-cy="post-info">
      <h2 className="post__title" data-cy="post-title">{post.title}</h2>
      <p className="post__body" data-cy="post-body">{post.body}</p>

      <div className="post__user">
        {post.user && (
          <UserInfo user={post.user} />
        )}
      </div>

      <div className="post__comments">
        <h4 className="post__comments-title">Comments:</h4>
        <CommentList comments={post.comments} />
      </div>
    </div>
  </>
);
