import React from 'react';

import './CommentInfo.scss';
import { Comm } from '../../type';

export const CommentInfo: React.FC <Comm> = ({
  name,
  body,
  email,
}) => (
  <>
    {`The name of the comment: ${name}.`}
    {' '}
    {`The body of the comment: ${body}.`}
    {' '}
    {`Who left the comment: ${email}.`}
  </>
);
