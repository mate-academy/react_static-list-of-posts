import { FC } from 'react';

import { Post } from '../../types/Post';

import { PostInfo } from '../PostInfo';

type Props = {
  posts: Post[];
};

export const PostList: FC<Props> = ({ posts }) => {
  return (
    <div className="PostList">
      {posts.map((post) => (
        <PostInfo
          key={post.id}
          post={post}
        />
      ))}
    </div>
  );
};
