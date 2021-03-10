import React from 'react';
import Post from '../Post';
import { PostType } from '../PostType/PostType';

export default function PostList({ postsWithComments }) {
  const userWithComents = postsWithComments.map(post => (
    <Post key={post.id} post={post} />
  ));

  return (
    <ul>
      {userWithComents}
    </ul>
  );
}

PostList.propTypes = {
  postsWithComments: PostType,
};

PostList.defaultProps = {
  postsWithComments: [],
};
