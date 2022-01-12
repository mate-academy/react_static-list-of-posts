import React from 'react';
import { Comment } from '../../_types/comment';
import { User } from '../../_types/user';
import CommentList from '../CommentList/CommentList';
import UserInfo from '../UserInfo/UserInfo';

import './PostInfo.scss';

type Props = {
  title: string,
  body: string,
  user: User | null,
  comments: Comment[],
};

const PostInfo: React.FC<Props> = ({
  title,
  body,
  user,
  comments,
}) => (
  <section className="PostInfo">
    {(user)
      ? <UserInfo name={user.name} email={user.email} />
      : null}
    <h2>{title}</h2>
    <p>{body}</p>
    <CommentList comments={comments} />
  </section>
);

export default PostInfo;
