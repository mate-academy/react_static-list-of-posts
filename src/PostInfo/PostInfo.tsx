import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

type Props = {
  preparedPost: Post;
};

export const PostInfo: React.FC<Props> = ({ preparedPost }) => (
  <div>
    <h2>{preparedPost.title}</h2>
    <p>{preparedPost.body}</p>
    {preparedPost.user && (<UserInfo user={preparedPost.user} />)}
    <CommentList comments={preparedPost.comment} />
  </div>
);
