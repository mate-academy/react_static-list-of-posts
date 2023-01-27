import React from 'react';

import './PostInfo.scss';

import { Post } from '../../types/Post';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList';

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
    <>
      {user && (
        <li className="PostInfo">
          <div className="PostInfo__header">
            <h3 className="PostInfo__title">
              {title}
            </h3>

            <p>
              {' Posted by  '}

              <UserInfo user={user} />
            </p>
          </div>

          <p className="PostInfo__body">
            {body}
          </p>

          <CommentList comments={comments} message="No comments yet" />
        </li>
      )}
    </>
  );
};
