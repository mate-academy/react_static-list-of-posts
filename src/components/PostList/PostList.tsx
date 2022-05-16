import React from 'react';
import { GeneralPosts } from '../../react-app-env';
import { PostInfo } from '../PostInfo';
import './PostList.scss';

type Props = {
  generalPosts: GeneralPosts[];
};

export const PostList: React.FC<Props> = ({ generalPosts }) => (
  <ol className="postsListNumbered">
    {generalPosts.map(generalPost => (
      <PostInfo generalPost={generalPost} key={generalPost.id} />
    ))}
  </ol>
);
