import React from 'react';
import { CommentList } from '../CommentList';
import { PopulatedComments } from '../../types/PopulatedComments';

import { UserInfo } from '../UserInfo';

type PostInfoProps = {
  post: PopulatedComments;
};

export const PostInfo: React.FC<PostInfoProps> = ({
  post: { title, body, user, comments },
}) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{title}</h3>
      <p>{' Posted by  '}</p>
      <UserInfo user={user} />
    </div>
    <p className="PostInfo__body">{body}</p>
    <hr />
    {comments.length === 0 ? (
      <b data-cy="NoCommentsMessage">No comments yet</b>
    ) : (
      <CommentList comments={comments} />
    )}
  </div>
);
