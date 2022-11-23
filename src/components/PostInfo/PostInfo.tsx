import React from 'react';
import './PostInfo.scss';
import { Post } from '../../types/Post';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({
  post: {
    title,
    body,
    user,
    comments,
  },
}) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{title}</h3>

      <p>
        {' Posted by  '}

        {user && (
          <UserInfo user={user} />
        )}
      </p>
    </div>

    <p className="PostInfo__body">
      {body}
    </p>

    <hr />
    {comments.length
      ? <CommentList comments={comments} />
      : <b data-cy="NoCommentsMessage">No comments yet</b>}
  </div>
);
