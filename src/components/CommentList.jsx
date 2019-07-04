import React from 'react'
import PropTypes from 'prop-types';

import Comment from './Comment'

const CommentList = ({currentComments}) => (
  <div>
    {currentComments.map(comment => (
      <Comment currentComment={comment}/>
      ))
    }
  </div> 
)

CommentList.propTypes = {
  currentComments: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CommentList