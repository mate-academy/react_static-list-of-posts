import React from 'react';

import './PostInfo.scss';

import { UserInfo } from '../UserInfo';
import { Post } from '../../types/Post';
import { CommentList } from '../CommentList';

type PostInfoProps = {
  post: Post;
};

export const PostInfo: React.FC<PostInfoProps> = ({ post }) => {
  const {
    title,
    body,
    user,
    comments,
  } = post;

  const postComments = comments.length
    ? <CommentList comments={comments} />
    : <b data-cy="NoCommentsMessage">No comments yet</b>;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">
          {title}
        </h3>

        <p>
          {user && <UserInfo user={user} />}
        </p>
      </div>

      <p className="PostInfo__body">
        {body}
      </p>
      {postComments}
    </div>
  );
};
