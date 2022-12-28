import React from 'react';
import './PostInfo.scss';

import { Post } from '../../types/Post';

import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const hasComments = post.comments.length > 0;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        <p>
          {' Posted by  '}
          {post.user && (<UserInfo user={post.user} />)}
        </p>
      </div>

      <p className="PostInfo__body">{post.body}</p>

      <hr />

      {hasComments
        ? <CommentList comments={post.comments} />
        : <b data-cy="NoCommentsMessage">No comments yet</b>}
    </div>
  );
};
