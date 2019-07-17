import React from "react"
import PropTypes from 'prop-types';



const Comment = ({currentComment}) => (
  <div>
    <div className='comment__author'>{currentComment.email} wrote: </div>
    <div className='comment__body'>{currentComment.body}</div>
  </div>
)

Comment.propTypes = {
  currentComment: PropTypes.object.isRequired,
}

export default Comment