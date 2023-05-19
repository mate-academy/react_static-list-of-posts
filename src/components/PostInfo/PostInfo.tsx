import React from 'react';
import './PostInfo.scss';
import { Post } from '../../types/Post';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

type PropsPostInfo = {
  post: Post;
};

export const PostInfo: React.FC<PropsPostInfo> = ({ post }) => {
  const {
    title, user, body, comments,
  } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        <p>
          {' Posted by '}
          {user ? <UserInfo user={user} /> : 'Not user'}
        </p>
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      <hr />

      {comments && comments.length ? (
        <CommentList comments={comments} />
      ) : (
        <>
          <hr />
          <b data-cy="NoCommentsMessage">No comments yet</b>
        </>
      )}
    </div>
  );
};
