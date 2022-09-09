import React from 'react';
import { Post } from '../types/Post';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

type Props = {
  post: Post
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    title,
    body,
    comments,
    user,
  } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        <p>
          {' Posted by  '}

          {user
            ? <UserInfo user={user} />
            : ''}
        </p>
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      <hr />
      <div className="CommentList">
        {comments
          ? <CommentList comments={comments} />
          : <b data-cy="NoCommentsMessage">No comments yet</b>}
      </div>
    </div>
  );
};
