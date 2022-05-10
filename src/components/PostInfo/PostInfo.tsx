import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';
import './PostInfo.scss';

import { Post } from '../../types/Post';

interface Props {
  props: Post,
}

export const PostInfo: React.FC<Props> = ({ props }) => (
  <>
    <h2 className="item__title" data-cy="post-title">{props.title}</h2>
    <p className="item__body" data-cy="post-body">{props.body}</p>
    {props.user && (
      <UserInfo props={props.user} />
    )}
    {(props.comments && props.comments.length) && (
      <CommentList props={props.comments} />
    )}
  </>
);
