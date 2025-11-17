import React from 'react';
import './PostInfo.scss';

import { PreparedPost } from '../../types/Post';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

type Props = {
  post: PreparedPost;
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const hasComments = post.comments.length > 0;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        <p>
          {' Posted by  '}
          <UserInfo user={post.user} />
        </p>
      </div>

      <p className="PostInfo__body">{post.body}</p>

      {hasComments ? (
        <CommentList comments={post.comments} />
      ) : (
        <>
          <hr />
          <b data-cy="NoCommentsMessage">No comments yet</b>
        </>
      )}
    </div>
  );
};
