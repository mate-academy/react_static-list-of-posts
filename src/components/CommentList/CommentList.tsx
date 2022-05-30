import React from 'react';
import { FullPost } from '../../react-app-env';
import './CommentList.scss';

type Props = {
  post: FullPost;
};

export const CommentList: React.FC<Props> = ({ post }) => (
  <div className="content is-normal">
    <ul>
      {post.comments.map(comment => (
        <li>{`${comment.name} --- ${comment.body}`}</li>
      ))}
    </ul>
  </div>
);
