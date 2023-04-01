import React from 'react';
import { Post } from '../../types/types';
import { CommentList } from '../CommentList';
import usersFromServer from '../../api/users';
import commentsFromServer from '../../api/comments';
import { UserInfo } from '../UserInfo';

export const PostInfo: React.FC<Post> = ({
  title,
  body,
  userId,
  id,
}) => (
  <>
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        <p>
          {' Posted by  '}

          <UserInfo users={usersFromServer} userId={userId} key={userId} />
        </p>
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      <hr />

      <CommentList list={commentsFromServer} idOfPost={id} />
    </div>
  </>
);
