import React from 'react';
import './PostList.scss';

import { FBPost } from '../../interfaces/FBPost';
import { PostInfo } from '../PostInfo';

interface Props {
  posts: FBPost[],
}

export const PostList: React.FC<Props> = ({ posts }) => (
  <fieldset>
    <legend>
      <mark>
        This block is being rendered by&#160;
        <b>
          &#34;PostList&#34;
        </b>
        &#160;component
      </mark>
    </legend>
    {posts.map((post) => (
      <PostInfo post={post} />
    ))}
  </fieldset>
);
