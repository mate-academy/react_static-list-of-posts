import React from 'react';
import './PostInfo.scss';
import { Post } from '../../types/Post';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

interface PostInfoProps {
  postInfo: Post
}

export const PostInfo: React.FC<PostInfoProps> = ({
  postInfo: {
    title, body, user, comments,
  },
}) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{title}</h3>

      <p>
        {' Posted by  '}

        {user ? <UserInfo userInfo={user} /> : undefined}
      </p>
    </div>

    <p className="PostInfo__body">
      {body}
    </p>

    { comments
      ? (
        <CommentList commentList={comments} />
      )
      : (
        <>
          <hr />

          <b data-cy="NoCommentsMessage">No comments yet</b>
        </>
      )}

  </div>
);
