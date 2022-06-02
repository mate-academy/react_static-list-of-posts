import React from 'react';
import { FullPost } from '../../react-app-env';
import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

type Props = {
  posts: FullPost[]
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <>
    {posts.map(post => (
      <React.Fragment key={post.id}>
        <PostInfo post={post} />
      </React.Fragment>
    ))}
  </>
);
