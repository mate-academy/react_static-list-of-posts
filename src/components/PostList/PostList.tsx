import React from 'react';

import './PostList.scss';
import { PostInfo } from '../PostInfo';
import { Todo } from '../../types/Todo';

type Props = {
  post: Todo[];
};

export const PostList: React.FC<Props> = ({ post }) => (
  <>
    <div className="PostList">

      { post.map(content => (
        content.user
        && (
          <PostInfo {...content} />
        )
      ))}
    </div>
  </>
);
