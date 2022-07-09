import React from 'react';
import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

type Props = {
  preparedPost: Post[]
};

export const PostList: React.FC<Props> = ({ preparedPost }) => (
  <div className="posts">
    {preparedPost.map(post => (
      <PostInfo
        title={post.title}
        body={post.body}
        user={post.user}
        comments={post.comments}
        key={post.id}
      />
    ))}
  </div>
);
