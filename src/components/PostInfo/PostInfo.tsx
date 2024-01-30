import React from 'react';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import { Comment, Post, User } from '../../types';
import './PostInfo.scss';

type Props = {
  post: Post,
  user: User,
  comments: Comment[]
};

export const PostInfo: React.FC<Props> = ({ post, user, comments }) => {
  const {
    title,
    body,
  } = post;

  const noComments = comments.length < 1;
  const commentList = noComments
    ? <b data-cy="NoCommentsMessage">No comments yet</b>
    : <CommentList coments={comments} />;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">
          {title}
        </h3>

        <p>
          {' Posted by  '}

          <UserInfo user={user} />
        </p>
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      <hr />

      {commentList}
    </div>
  );
};
