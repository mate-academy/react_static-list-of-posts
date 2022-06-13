import React from 'react';
import './PostList.scss';
import { PostInfo } from '../PostInfo/PostInfo';
import { PostListProps } from '../../types/PostListProps';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

export const PostList: React.FC<PostListProps> = ({ data = [] }) => (
  <ul className="post-list">
    {data.map(item => (
      <li key={item.id} className="post-list__item">
        <PostInfo post={item} />
        {item.user !== null && <UserInfo user={item.user} />}
        <CommentList comments={item.comments} />
      </li>
    ))}
  </ul>
);
