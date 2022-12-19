import React from 'react';
import { Posts } from '../../types/Posts';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList';

type Props = {
  post: Posts;
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    user, title, body, comments,
  } = post;

  return (
    <li className="post__item">
      <div className="post" data-cy="post-info">
        <div className="post__wrapper">
          <div className="post__user">
            {user ? (<UserInfo user={user} />) : 'Unknown User'}
          </div>
          <div>
            <h2 className="post__title" data-cy="post-title">
              {title}
            </h2>
            <p className="post__text" data-cy="post-body">
              {body}
            </p>
          </div>
        </div>
        <CommentList comments={comments} />
      </div>
    </li>
  );
};
