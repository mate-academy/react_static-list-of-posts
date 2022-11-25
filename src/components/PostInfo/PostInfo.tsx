import React from 'react';
import './PostInfo.scss';

import { Post } from '../../types/Post';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    title, body, user, comments, id,
  } = post;

  return (
    <li key={id}>
      <div className="PostInfo">
        <div className="PostInfo__header">
          <h3 className="PostInfo__title">
            {title}
          </h3>

          <p>
            {' Posted by  '}
            {user && <UserInfo user={user} />}
          </p>
        </div>

        <p className="PostInfo__body">
          {body}
        </p>

        <hr />

        {comments.length
          ? <CommentList commentsList={comments} />
          : <b data-cy="NoCommentMessage">No comments yet</b>}

      </div>
    </li>
  );
};
