import React from 'react';
import { CommentsList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import { Post } from '../types/Post';
import './PostInfo.scss';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    title,
    body,
    user,
    comments,
  } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>
        {user && (<UserInfo user={user} />)}
      </div>
      <p className="PostInfo__body">{body}</p>

      {comments.length === 0 ? (
        <>
          <hr />
          <b data-cy="NoCommentsMessage">No comments yet</b>
        </>
      ) : (
        <CommentsList comments={comments} />
      )}
    </div>
  );
};
