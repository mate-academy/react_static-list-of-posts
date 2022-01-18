import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { PostInfo } from '../PostInfo/PostInfo';

type Props = {
  preparedPosts: PreparedPost[],
};

export const PostList: React.FC<Props> = ({ preparedPosts }) => (
  <ListGroup as="ul">
    {preparedPosts.map((post: PreparedPost) => (
      <ListGroup.Item as="li" className="taskList__task" key={post.id}>
        <PostInfo
          title={post.title}
          body={post.body}
          user={post.user}
          comments={post.comments}
        />
      </ListGroup.Item>
    ))}
  </ListGroup>
);
