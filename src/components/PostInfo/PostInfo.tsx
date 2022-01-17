import React from 'react';
import { ListGroup, Card } from 'react-bootstrap';
import { PrepearedPost } from '../../types/PrepearedPost';
import { UserInfo } from '../UserInfo';
import { CommentInfo } from '../CommentInfo';

type Props = {
  posts: PrepearedPost[]
};

export const PostInfo:React.FC<Props> = ({ posts }) => (
  <ListGroup>
    {posts.map(post => (
      <ListGroup.Item as="li" key={post.id}>
        <Card.Header as="h3">{post.title}</Card.Header>
        <Card.Text>{post.body}</Card.Text>
        {post.user && <UserInfo user={post.user} />}
        {post.comments && <CommentInfo comments={post.comments} />}
      </ListGroup.Item>
    ))}
  </ListGroup>
);
