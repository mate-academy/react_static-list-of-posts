import React from 'react';
import { CommentList } from '../CommentList/CommentList';
import { Post } from '../../types/Post';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    title,
    body,
    user,
    comments,
  } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        <p>
          {'  Posted by  '}
          {user && <UserInfo user={user} />}
        </p>
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      {comments.length === 0
        ? (
          <>
            <hr />
            <b data-cy="NoCommentsMessage">No comments yet</b>
          </>
        )
        : <CommentList comments={comments} />}

    </div>
  );
};
