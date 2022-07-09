import React from 'react';
import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <>
    {posts.map(post => (
      <div className="box has-background-grey-lighter">
        <div className="content is-normal">
          <PostInfo post={post} />
        </div>
      </div>
    ))}
  </>
);
