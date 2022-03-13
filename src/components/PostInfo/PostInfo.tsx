import React from 'react';
import { User } from '../../interfaces/userInterface';
import { Comment } from '../../interfaces/commentInterface';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';
import './PostInfo.css';

type Props = {
  title: string,
  body: string,
  user: User | null,
  comment: Comment[],
};

export const PostInfo: React.FC<Props> = ({
  title,
  body,
  user,
  comment,
}) => (
  <>
    <h2>
      {title}
    </h2>
    <p>
      {body}
    </p>
    <UserInfo
      name={user ? user.name : ''}
      email={user ? user.email : ''}
    />
    <br />
    <div className="comment_list">
      <CommentList
        comments={comment}
      />
    </div>
  </>
);
