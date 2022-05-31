import React from 'react';
import { PreparedPosts } from '../../react-app-env';
import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

interface Prop {
  postArray: PreparedPosts[]
}

export const PostList: React.FC<Prop> = ({ postArray }) => (
  <div>
    <ul>
      {postArray.map(post => (
        <PostInfo post={post} />
      ))}
    </ul>
  </div>

);
