import React from 'react';
import { Card } from 'react-bootstrap';
import { Post } from '../../types/Post';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

type Props = {
  post: Omit<Post, 'id'>;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <Card className="PostInfo">
    <Card.Body>
      <UserInfo user={post.user} />

      <div className="PostInfo__content">
        <Card.Title className="PostInfo__title">
          {post.title}
        </Card.Title>

        <Card.Subtitle className="PostInfo__body">
          {post.body}
        </Card.Subtitle>
      </div>

      <CommentList comments={post.comments} />
    </Card.Body>
  </Card>
);
