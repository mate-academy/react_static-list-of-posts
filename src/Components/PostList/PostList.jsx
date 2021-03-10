import React from 'react';
import Post from '../Post';
import { PostType } from '../PostType/PostType';

export default function PostList({ posts }) {
  const userWithComents = posts.map(post => (
    <Post key={post.id} post={post} />
  ));

  return (
    <ul>
      {userWithComents}
    </ul>
  );
}

PostList.propTypes = {
  posts: PostType,
};

PostList.defaultProps = {
  posts: [],
};
