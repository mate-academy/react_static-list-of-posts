import React from 'react';
import { Post } from './Post';

export function PostList(props) {
  const { postList } = props;
  const postItems = postList.map(post => <Post {...post} key={post.id} />);

  return (
      <div className="post-list">
        {postItems}
      </div>
  );
}
