import React from 'react';
import './PostInfo.scss';
import { Post } from '../../types/Post';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

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
    </div>
    {
      user
        ? <UserInfo user={user} />
        : <b>No user</b>
    }

    <p className="PostInfo__body">
      {body}
    </p>
    <hr />

    {
      comments.length > 0
        ? <CommentList comments={comments} />
        : <b data-cy="NoCommentsMessage">No comments yet</b>
    }
  </div>

);
