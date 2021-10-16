import React from 'react';
import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo';
import './PostList.scss';

type Props = {
  preparedPosts: Post[]
};

export const PostList: React.FC<Props> = ({ preparedPosts }) => (
  <>
    {preparedPosts.map(preparedPost => (
      <div className="post" key={preparedPost.id}>
        <PostInfo post={preparedPost} />
      </div>
    ))}
  </>
);
