import React from 'react';
import Post from '../Post';
import { PostType } from '../PostType/PostType';

export default function PostList({ userComments }) {
  const userWithComents = userComments.map(post => (
    <Post key={post.id} post={post} />
  ));

  return (
    <ul>
      {userWithComents}
    </ul>
  );
}

PostList.propTypes = {
  userComments: PostType,
};

PostList.defaultProps = {
  userComments: [],
};
