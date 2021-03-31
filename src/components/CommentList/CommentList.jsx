import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment';
import { CommentType } from '../Comment/Comment';
import './CommentList.scss';

export const CommentList = ({ list }) => (
  <div className="CommentList">
    {list.map(comment => (
      <Comment
        key={comment.id}
        name={comment.name}
        body={comment.body}
        email={comment.email}
      />
    ))}
  </div>
);

export const commentListType = {
  ...CommentType,
  id: PropTypes.number.isRequired,
};

CommentList.propTypes = { list: PropTypes.arrayOf(
  PropTypes.shape(commentListType),
).isRequired };
