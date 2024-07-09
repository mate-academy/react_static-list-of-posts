import React from 'react';
import { Post } from '../../types/post';
import { CommentList } from '../CommentList';
import './PostInfo.scss';
import { UserInfo } from '../UserInfo';

type Props = {
  post: Post;
};

const noComments: JSX.Element = (
  <>
    <hr />
    <b data-cy="NoCommentsMessage">No comments yet</b>
  </>
);

export const PostInfo: React.FC<Props> = ({ post }) => {
  const { user, title, body, comments } = post;
  const postetByText = `Posted by ${(<UserInfo user={user} />)}`;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>
        <p>{postetByText}</p>
      </div>
      <p className="PostInfo__body">{body}</p>
      {comments?.length === 0 ? (
        noComments
      ) : (
        <CommentList comments={comments} />
      )}
    </div>
  );
};
