import React from 'react';
import './CommentList.scss';
import PropTypes from 'prop-types';
import { CommentShape } from '../../Types';
import Comment from '../Comment';

const CommentList = ({ comments, postId }) => (
  <>
    <div className="text-center pb-3">Comment section</div>
    <span className="commentsList">
      {comments.filter(comm => comm.postId === postId).map(person => (
        <Comment
          name={person.name}
          email={person.email}
          body={person.body}
        />
      ))}
    </span>
  </>
);

CommentList.propTypes = {
  comments: PropTypes.objectOf(CommentShape).isRequired,
  postId: PropTypes.number.isRequired,
};

export default CommentList;
