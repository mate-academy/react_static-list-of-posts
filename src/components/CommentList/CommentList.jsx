import React from 'react';
import PropTypes from 'prop-types';
import { CommentTypes } from '../../types';
import { Comment } from '../Comment';

export const CommentList = ({ comment }) => (
  <>
    <ol className="item-wrapper">
      { comment.map(com => (
        <li key={com.id} className="item">
          <Comment {...com} />
        </li>
      ))}
    </ol>
  </>
);

CommentList.propTypes = {
  comment: PropTypes.arrayOf(CommentTypes).isRequired,
};
