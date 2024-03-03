import React from 'react';

import './PostInfo.scss';

import { Post } from '../../types/post';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const { title, body, id, user, comments } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        {user && <UserInfo key={id} user={user} />}
      </div>

      <p className="PostInfo__body">{body}</p>

      <hr />

      {comments.length > 0 ? (
        <CommentList key={id} comments={comments} />
      ) : (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      )}
    </div>
  );
};
