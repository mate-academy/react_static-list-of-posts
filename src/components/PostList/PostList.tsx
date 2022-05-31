import React from 'react';
import { PostInfo } from '../PostInfo/PostInfo';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';
import './PostList.scss';
import { Props } from '../../type';

export const PostList: React.FC <Props> = (
  props,
) => (
  <div>
    {props.prepared.map(prep => (
      <li key={prep.id}>
        <PostInfo {...prep} />
        <UserInfo {...prep.user} />
        <CommentList comms={prep.comments} />
      </li>
    ))}
  </div>
);
