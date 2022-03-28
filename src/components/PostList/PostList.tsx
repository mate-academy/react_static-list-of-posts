import { FC } from 'react';
import { AllPost } from '../../types';
import { PostInfo } from '../PostInfo/PostInfo';

type Props = {
  posts: AllPost[];
};

export const PostList: FC<Props> = ({ posts }) => (
  <>
    {posts.map((post) => (
      <PostInfo key={post.id} post={post} />
    ))}
  </>
);
