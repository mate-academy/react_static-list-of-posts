import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../comment/comment';
import { TypeComment } from '../../type';

import './commentlist.scss';

export const CommentList = ({ filtered }) => (
  <>
    <h2 className="commet-title">
      Сommentary:
    </h2>
    {filtered.map(comment => (
      <div key={comment.id} className="item">
        <Comment {...comment} />
      </div>
    ))}
  </>
);

CommentList.propTypes = {
  filtered: PropTypes.arrayOf(
    TypeComment.isRequired,
  ).isRequired,
};
