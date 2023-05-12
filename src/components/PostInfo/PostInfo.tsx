import React from 'react';

import './PostInfo.scss';
import { Post } from '../../types/Post';
import { Comment } from '../../types/Comment';
import { User } from '../../types/User';

import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

type Props = {
  post: Post & {
    user: User;
    comments: Comment[]
  },
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    user,
    comments,
    title,
    body,
  } = post;

  return (
    <>
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">
          {title}
        </h3>

        {user && <UserInfo user={user} />}
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      <hr />

      {(comments.length > 0)
        ? (
          <div className="CommentList">
            <CommentList
              comments={comments}
            />
          </div>
        )
        : (
          <b data-cy="NoCommentsMessage">
            No comments yet
          </b>
        )}
    </>
  );
};
