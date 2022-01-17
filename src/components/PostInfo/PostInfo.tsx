import React from 'react';
import { ListGroup, Card } from 'react-bootstrap';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

export const PostInfo:React.FC<PrepearedPost> = ({ ...post }) => (
  <ListGroup.Item as="li" key={post.id}>
    <Card.Header as="h3">{post.title}</Card.Header>
    <Card.Text>{post.body}</Card.Text>
    {post.user && <UserInfo {...post.user} />}
    <Card.Header as="h5">Comments of post below</Card.Header>
    {post.comments && <CommentList comments={post.comments} />}
  </ListGroup.Item>
);
