import React from 'react';
import { PreparedPosts } from '../../react-app-env';
import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

interface Prop {
  postsPrepared: PreparedPosts[];
}

export const PostList: React.FC<Prop> = ({ postsPrepared }) => (
  <div className="portsPrepare">
    {postsPrepared.map(item => (
      <PostInfo key={item.id} post={item} />
    ))}
  </div>
);
