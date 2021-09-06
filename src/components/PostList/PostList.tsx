import React from 'react';

import PostInfo from '../PostInfo';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = (props) => {
  const { posts } = props;

  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <PostInfo posts={post} />
        </li>
      ))}
    </ul>
  );
};
