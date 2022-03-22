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
    <Card.Body className="PostInfo__container">
      <div className="PostInfo__author">
        <UserInfo user={post.user} />
      </div>

      <div className="PostInfo__content">
      </div>
        <Card.Title>
          {post.title}
        </Card.Title>

        <Card.Subtitle>
          {post.body}
        </Card.Subtitle>


      <CommentList comments={post.comments} />
    </Card.Body>
  </Card>
);
