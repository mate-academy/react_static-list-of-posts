import React from 'react';
import { Users } from '../../types/Users';
import { Comments } from '../../types/Comments';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

export interface Todo {
  user: Users | null,
  comments: Comments[] | null,
  title: string,
  body: string,
  id: number,
}

export const PostInfo: React.FC<Todo> = ({
  user,
  comments,
  title,
  body,
  id,
}) => (
  <div className="PostInfo" key={id}>
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{title}</h3>
      <p>
        <UserInfo
          name={user?.name}
          email={user?.email}
          id={id}
        />
      </p>
    </div>
    <p className="PostInfo__body">
      {body}
    </p>

    <CommentList
      comments={comments}
      id={id}
    />
  </div>

);
