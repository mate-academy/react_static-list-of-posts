import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';
import { PreparedPost } from '../../types/PreparedPost';

import './PostInfo.scss';

type Props = Pick<PreparedPost, 'title' | 'body' | 'user' | 'comments'>;

export const PostInfo: React.FC<Props> = ({
  title,
  body,
  user,
  comments,
}) => {
  return (
    <>
      <h2 className="posts__title">
        {title}
      </h2>
      <div className="posts__author-post">
        <div className="posts__message">
          {body}
        </div>
        {
          user && (
            <div className="posts__author">
              <UserInfo {...user} />
            </div>
          )
        }
        <div className="posts__line" />
      </div>
      <CommentList
        comments={comments}
      />
    </>
  );
};
