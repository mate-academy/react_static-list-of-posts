import React from 'react';
import Post from '../Post';
import { PostType } from '../PostType/PostType';

export default function PostList({ posts }) {
  const postList = posts.map(post => (
    <Post key={post.id} post={post} />
  ));

  return (
    <ul>
      {postList}
    </ul>
  );
}

PostList.propTypes = {
  posts: PostType,
};

PostList.defaultProps = {
  posts: [],
};
