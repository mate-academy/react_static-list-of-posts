import React from 'react';
import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

type Props = {
  preparedPosts: Post[],
};

export const PostList: React.FC<Props> = ({ preparedPosts }) => (
  <div>
    {preparedPosts.map(({
      title, body, user, comments,
    }) => (
      <PostInfo title={title} body={body} user={user} comments={comments} />
    ))}
  </div>
);
