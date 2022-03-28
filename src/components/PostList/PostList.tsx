import { FC } from 'react';
import { AllPosts } from '../../types';
import { PostInfo } from '../PostInfo/PostInfo';

type Props = {
  posts: AllPosts[];
};

export const PostList: FC<Props> = ({ posts }) => (
  <>
    {posts.map((post) => (
      <PostInfo key={post.id} post={post} />
    ))}
  </>
);
