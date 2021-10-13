import React from 'react';
import { PostInfoProps } from './Types/PostTypes';

export const PostInfo: React.FC<PostInfoProps> = ({ title, body }) => (
  <>
    <td>{title}</td>
    <td>{body}</td>
  </>
);
