import React from 'react';
import { Post } from '../../types';
import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

type PostListProps = {
  preparedPosts: Post[]
};

export const PostList: React.FC<PostListProps> = (props) => {
  return (
    <>
      {props.preparedPosts.map(post => (<PostInfo post={post} />))}
    </>
  );
};
