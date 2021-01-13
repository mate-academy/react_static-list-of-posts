import React from 'react';
import { Post } from './Post';
import { TypeOfPostList } from '../types';

export const PostList = ({ list }) => (
  <div style={{
    background: 'dodgerblue', padding: '20px',
  }}
  >
    {list.map(post => <Post key={post.id} {...post} />)}
  </div>
);

PostList.propTypes = TypeOfPostList;
