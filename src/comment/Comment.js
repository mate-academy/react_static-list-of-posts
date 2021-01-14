import React from 'react';
import { checkPropTypesComments } from '../checkPropTypes/CheckPropTypeComment';

export const Comment = ({ remark }) => (
  <div className="comment">
    <div>
      {remark.name}
    </div>

    <div>
      {remark.body}
    </div>

    <div>
      {remark.email}
    </div>
  </div>
);

Comment.propTypes = checkPropTypesComments;
