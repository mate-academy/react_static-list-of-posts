import React from 'react';
import { Post } from '../../types/Post';
import { CommentList } from '../CommentList';
import './PostInfo.scss';

export const PostInfo: React.FC<{ post: Post }> = ({ post }) => {
  const { title, user, body, comments } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        <p>
          {' Posted by  '}

          <a className="UserInfo" href={`mailto:${user?.email}`}>
            {user?.name}
          </a>
        </p>
      </div>
      <p className="PostInfo__body">{body}</p>
      <hr />
      {comments && comments.length > 0 ? (
        <CommentList comments={comments} />
      ) : (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      )}
    </div>
  );
};
