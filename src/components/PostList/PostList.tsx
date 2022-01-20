import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { PostInfo } from '../PostInfo';

type Props = {
  posts: PrepearedPost[];
};

export const PostList:React.FC<Props> = ({ posts }) => (
  <ListGroup as="ul">
    {posts.map(post => (
      <PostInfo
        key={post.id}
        {...post}
      />
    ))}
  </ListGroup>
);
