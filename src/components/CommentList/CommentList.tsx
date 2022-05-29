import React from 'react';
import { PreparedPosts } from '../../react-app-env';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

interface Props {
  post: PreparedPosts;
}

export const CommentList: React.FC<Props> = ({ post }) => (
  <ul className="comment_list">
    {post.comments?.map(comment => (
      <CommentInfo comment={comment} />
    ))}
  </ul>
);
