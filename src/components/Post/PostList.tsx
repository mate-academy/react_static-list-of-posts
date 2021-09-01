import React from 'react';
import { Post } from '../../types/Post';
import { PostInfo } from './PostInfo';
import './Post.scss';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = (props) => {
  const { posts } = props;

  return (
    <>
      <div className="container">
        {posts.map(post => (
          <div className="post container__post" key={post.id}>
            <PostInfo post={post} />
          </div>
        ))}
      </div>
    </>
  );
};
