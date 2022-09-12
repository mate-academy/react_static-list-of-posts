import React from 'react';
import { UserInfo } from '../UserInfo';
import { Posts } from '../../types/Posts';
import { CommentList } from '../CommentList';

type Props = {
  post: Posts;
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    title,
    user,
    comments,
  } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        <p>
          {' Posted by  '}
          {user && <UserInfo user={user} />}
        </p>
      </div>

      <p className="PostInfo__body">
        {post.body}
      </p>

      <hr />

      { comments
        ? <CommentList comments={comments} />
        : <b data-cy="NoCommentsMessage">No comments yet</b> }
    </div>
  );
};
