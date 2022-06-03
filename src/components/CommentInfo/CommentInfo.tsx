import React from 'react';

import './CommentInfo.scss';
import { PropsComInfo } from '../../type';

export const CommentInfo: React.FC <PropsComInfo> = ({ comInfo }) => (
  <>
    {`The name of the comment: ${comInfo.name}.`}
    {' '}
    {`The body of the comment: ${comInfo.body}.`}
    {' '}
    {`Who left the comment: ${comInfo.email}.`}
  </>
);
