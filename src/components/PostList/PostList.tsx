import React from 'react';
import './PostList.scss';

import { PostInfo } from '../PostInfo/PostInfo';
import { PreparedPost } from '../../react-app-env';

type Props = {
  preparedPost: PreparedPost[],
};

export const PostList: React.FC<Props> = ({ preparedPost }) => (
  <>
    {preparedPost.map((post: PreparedPost) => (
      <div className="message is-warning">
        <h2 className="message-header">{`id: ${post.id}`}</h2>
        <PostInfo post={post} />
      </div>
    ))}
  </>
);
