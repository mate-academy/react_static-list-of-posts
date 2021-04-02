import React from 'react';
import PropTypes from 'prop-types';
import { Comment, commentType } from '../Comment';

export const CommentList = ({ comments }) => (
  <>
    <div className="Comments">
      <ul>
        {comments.map(item => (
          <li key={item.id}>
            <Comment {...item} />
          </li>
        ))}
      </ul>
    </div>
  </>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(commentType).isRequired,
};
