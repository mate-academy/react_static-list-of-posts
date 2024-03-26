import React from 'react';
import { Post } from '../../types/Post';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList/CommentList';
import './PostInfo.scss';

interface Props {
  post: Post;
}

export const PostInfo: React.FC<Props> = ({ post }) => {
  const { title, body, user, comments } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>
        {user && <UserInfo user={user} />}
      </div>
      <p className="PostInfo__body">{body}</p>
      {comments && comments.length > 0 ? (
        <CommentList comments={comments} />
      ) : (
        <div data-cy="NoCommentsMessage">No comments yet</div>
      )}
    </div>
  );
};
