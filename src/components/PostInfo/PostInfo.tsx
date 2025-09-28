import React from 'react';
import { Posts } from '../../types/Posts';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';
import './PostInfo.scss';
interface PostProps {
  post: Posts;
}

export const PostInfo: React.FC<PostProps> = ({ post }) => {
  const commentsArr = post.comments ?? [];
  const user = post.user ?? undefined;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        <p>
          {' Posted by  '}

          {user ? <UserInfo user={user} /> : null}
        </p>
      </div>

      <p className="PostInfo__body">{post.body}</p>

      <hr />

      {commentsArr.length === 0 ? (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      ) : (
        <CommentList comments={commentsArr} />
      )}
    </div>
  );
};
