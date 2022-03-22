import React from 'react';
import { Card } from 'react-bootstrap';
import { Post } from '../../types/Post';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

type Props = {
  post: Pick<Post, 'user' | 'comments'>;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <Card className="PostInfo">
    <Card.Body className="PostInfo__container">
      <div className="PostInfo__author">
        <UserInfo user={post.user} />
      </div>

      <CommentList comments={post.comments} />
    </Card.Body>
  </Card>
);
