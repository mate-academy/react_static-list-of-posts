import React from 'react';
import { Post, User } from '../../types/types';
import { CommentList } from '../CommentList';
import usersFromServer from '../../api/users';
import commentsFromServer from '../../api/comments';

function findUser(arrayUsers: User[], postId: number) {
  const user: User | undefined = arrayUsers.find((
    currentUser: User,
  ) => currentUser.id === postId);

  return (
    user
      ? (
        <a className="UserInfo" href={user.email}>
          {user.name}
        </a>
      )
      : undefined
  );
}

export const PostInfo: React.FC<Post> = ({
  title, body, userId, id,
}) => (
  <>
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        <p>
          {' Posted by  '}

          <a className="UserInfo" href="mailto:Sincere@april.biz">
            {findUser(usersFromServer, userId)}
          </a>
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
