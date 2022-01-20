import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { PostInfo } from '../PostInfo/PostInfo';

type Props = {
  preparedPosts: PreparedPost[],
};

export const PostList: React.FC<Props> = ({ preparedPosts = [] }) => (
  <ListGroup as="ul">
    {preparedPosts?.map((post) => (
      <ListGroup.Item as="li" key={post.id}>
        <PostInfo post={post} />
      </ListGroup.Item>
    ))}
  </ListGroup>
);
