import React from 'react';
import { Post } from '../../types/Post';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

type Props = {
  post: Post;
};
export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    user,
    title,
    body,
    comments,
  } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>
        <UserInfo user={user} />
      </div>

      <p className="PostInfo__body">
        {body}
      </p>
      {comments.length
        ? <CommentList comments={comments} />
        : <b data-cy="NoCommentsMessage">No comments yet</b>}
      <hr />
    </div>
  );
};
