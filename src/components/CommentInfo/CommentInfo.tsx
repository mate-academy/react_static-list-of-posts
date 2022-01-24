import React from 'react';
import { TypeComment } from '../../types/TypeComment';

export const CommentInfo: React.FC<TypeComment> = ({ name, email, body }) => (
  <>
    {name}
    {email}
    {body}
  </>
);
