import React from 'react';
import { Post } from '../../types/types';
import { PostInfo } from '../PostInfo';
import './PostList.scss';

interface Props {
  list: Post[];
}

export const PostList: React.FC<Props> = ({ list }) => (
  <>
    <ul className="postList">
      {list.map(
        post => (
          <li>
            <PostInfo {...post} key={post.id} />
          </li>
        ),
      )}
    </ul>
  </>
);
