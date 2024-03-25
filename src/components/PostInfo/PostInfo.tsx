import React from 'react';
import { Post } from '../../types/Post';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';
import './PostInfo.scss';

export const PostInfo: React.FC<{ post: Post }> = ({ post }) => {
  const commentsElement = post.comments.length ? (
    <CommentList comments={post.comments} />
  ) : (
    <b data-cy="NoCommentsMessage">No comments yet</b>
  );

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>
        <p>
          {' Posted by  '}
          {post.user && <UserInfo user={post.user} />}
        </p>
      </div>
      <p className="PostInfo__body">{post.body}</p>
      <hr />
      {commentsElement}
    </div>
  );
};
