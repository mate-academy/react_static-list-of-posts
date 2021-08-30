import React from 'react';
import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo';
import './PostList.scss';

type Props = {
  posts: Post[],
};

export const PostList: React.FC<Props> = (props) => {
  const { posts } = props;

  return (
    <>
      {posts.map(post => (
        <div className="post" key={post.id}>
          <PostInfo post={post} />
        </div>
      ))}
    </>
  );
};
