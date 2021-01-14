import React from 'react';
import './CommentList.scss';
import PropTypes from 'prop-types';
import { CommentShape } from '../../Types';
import Comment from '../Comment';

const CommentList = ({ commentsData }) => (
  <>
    <div className="text-center pb-3">Comment section</div>
    <div className="commentsList">
      {commentsData.map(person => (
        <div key={person.id}>
          <Comment
            {...person}
          />
        </div>
      ))}
    </div>
  </>
);

CommentList.propTypes = {
  commentsData: PropTypes.arrayOf(CommentShape).isRequired,
};

export default CommentList;
