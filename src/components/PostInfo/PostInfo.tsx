import React from 'react';
import './PostInfo.scss';
import { Post } from '../../types/types';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

type PostInfoProps = {
  post: Post;
};

export const PostInfo: React.FC<PostInfoProps> = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>
      {post.user && <UserInfo key={post.id} user={post.user} />}
    </div>

    <p className="PostInfo__body">
      {post.body}
    </p>

    <hr />

    {post.comments.length > 0 ? (
      <CommentList
        key={post.id}
        comments={post.comments}
      />
    ) : (
      <b data-cy="NoCommentsMessage">No comments yet</b>
    )}
  </div>
);
