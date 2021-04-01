import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment'
import { commentType } from '../Comment'

export const CommentList = ({allComments}) => (
  <>
    <div className="Comments">
      {allComments.map(item => (
        <ul key={item.id}>
          <li>
            <Comment {...item}/>
          </li>
        </ul>
      ))}
    </div>
  </>
);

CommentList.propTypes = {
  allComments: PropTypes.arrayOf(commentType).isRequired,
}
