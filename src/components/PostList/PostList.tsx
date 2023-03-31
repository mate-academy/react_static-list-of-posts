import React from 'react';
import { Post } from '../../types/types';
import { PostInfo } from '../PostInfo';

type Props = {
  list: Post[];
};

export const PostList: React.FC<Props> = (props) => (
  <>
    {props.list.map(post => <PostInfo {...post} key={post.id} />)}
  </>
);
