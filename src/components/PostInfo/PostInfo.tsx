import React from 'react';
import { PostInfoType } from '../../Types/Types';
import { UserInfo } from '../UserInfo';

export const PostInfo: React.FC<PostInfoType> = ({
  title,
  body,
  userId,
  users,
}) => {
  const person = users.find(p => p.id === userId);

  return (
    <>
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        <p>
          {' Posted by  '}

          {
            person
              ? (
                <UserInfo
                  name={person.name}
                  email={person.email}
                />
              )
              : null
          }
        </p>
      </div>

      <p className="PostInfo__body">{body}</p>
    </>
  );
};
