import React from 'react';
import { Post } from '../../Type/post';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';
import './PostInfo.scss';

type Props = {
  post: Post,
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    title,
    body,
    user,
    comments,
  } = post;

  return (
    <>
      <div className="PostInfo">
        <div className="PostInfo__header">
          <h3 className="PostInfo__title">
            {title}
          </h3>

          {' Posted by  '}
          {user
            && <UserInfo user={user} />}
        </div>

        <p className="PostInfo__body">
          {body}
        </p>
        <hr />

        <div className="CommentList">
          {comments.length
            ? <CommentList comments={comments} />
            : 'No comments yet'}
        </div>
      </div>
    </>
  );
};
