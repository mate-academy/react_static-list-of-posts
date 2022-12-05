import React from 'react';
import { CommentList } from '../CommentList';

import { UserInfo } from '../UserInfo';
import { Post } from '../../types/Post';
import './PostInfo.scss';

type Props = {
  post: Post
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    title,
    body,
    user,
  } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">
          {title}
        </h3>

        <p>
          {' Posted by  '}

          {user && (<UserInfo user={user} />)}
        </p>
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      {post.comments.length
        ? (<CommentList comments={post.comments} />)
        : (
          <div>
            <hr />
            <b data-cy="NoCommentsMessage">No comments yet</b>
          </div>
        )}
    </div>
  );
};
