import React, { Fragment } from 'react';
import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts = [] }) => {
  return (
    <>
      {posts.map(post => (
        <Fragment key={post.id}>
          <PostInfo post={post} />
        </Fragment>
      ))}
    </>
  );
};
