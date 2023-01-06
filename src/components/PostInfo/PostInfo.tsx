import React from 'react';
import { CommentList } from '../CommentList';
import { Post } from '../../types/post';
import { UserInfo } from '../UserInfo';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    title,
    comments,
    user,
    body,
  } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        <p>
          {' Posted by  '}

          <UserInfo
            userInfo={user}
          />
        </p>
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      <hr />

      {comments.length === 0
        ? (<b data-cy="NoCommentsMessage">No comments yet</b>)
        : (
          <CommentList comments={comments} />
        )}

    </div>

  );
};
