import React from 'react';
import { Post } from './Post';

export function PostList({ list }) {
  return (
    <ul>
      {list.map(item => (
        <li key={item.id}>
          <Post {...item} />
        </li>
      ))}
    </ul>
  );
}
