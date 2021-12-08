import React from 'react';
import { Post } from '../../types/Post';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = Omit<Post, 'id' | 'title' | 'body'>;

export const PostInfo: React.FC<Props> = ({ user, comments }) => (
  <>
    {user && <UserInfo {...user} />}

    <CommentList comments={comments} />
  </>
);
