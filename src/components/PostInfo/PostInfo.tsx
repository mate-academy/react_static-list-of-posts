import React from 'react';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

import './PostInfo.scss';

import { Post } from '../../types/Post';

type Props = {
  post: Post;
};

const showNoCommnets = () => (
  <>
    <hr />

    <b data-cy="NoCommentsMessage">No comments yet</b>
  </>
);

export const PostInfo: React.FC<Props> = ({
  post: {
    title,
    body,
    user,
    comments,
  },
}) => (
  <>
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

    {
      comments.length > 0
        ? <CommentList comments={comments} />
        : showNoCommnets()
    }
  </>
);
