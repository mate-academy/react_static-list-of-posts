import React from 'react';
import { FullPostType } from '../../types/FullPost';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

import './PostInfo.scss';

interface PostInfoPropsType {
  post: FullPostType;
}

export const PostInfo: React.FC<PostInfoPropsType> = ({ post }) => {
  const {
    title,
    user,
    body,
    comments,
  } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        <p>
          {' Posted by  '}
          {user
            ? <UserInfo user={user} />
            : 'Anonymus'}
        </p>
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      <hr />

      {comments.length
        ? <CommentList comments={comments} />
        : <b data-cy="NoCommentsMessage">No comments yet</b> }
    </div>
  );
};
