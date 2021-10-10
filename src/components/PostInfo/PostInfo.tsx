import React from 'react';
import { UserInfo } from '../Author/UserInfo';
import { CommentList } from '../Comments/CommentList';
import { PreparedPost } from '../../types';

type Props = {
  data: PreparedPost;
};
export const PostInfo: React.FC<Props> = ({ data: preparedPost }) => (
  <li className="post-list__item post" key={preparedPost.id}>
    <h3 className="post__title">
      {`Title: ${preparedPost.title}`}
    </h3>
    <p className="post__body">
      {`Body: ${preparedPost.body}`}
    </p>
    <UserInfo data={preparedPost.user} />
    <CommentList data={preparedPost.commentArray} />
  </li>
);
