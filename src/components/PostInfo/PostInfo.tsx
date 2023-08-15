import React from 'react';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import { Post } from '../../type/Post';

type Props = {
  post: Post
};

export const PostInfo: React.FC<Props> = ({
  post: {
    title,
    body,
    user,
    comments = null,
  },
}) => (
  <>
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>
        { user && <UserInfo user={user} /> }
      </div>
      <p className="PostInfo__body">{body}</p>
      <hr />

      {comments ? (
        <CommentList comments={comments} />
      ) : (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      )}
    </div>
  </>
);
