import React from 'react';
import PropTypes from 'prop-types';
import {Comment} from '../Comment/Comment';
import './Comment.scss';

export const CommentList = ({props}) => (
  <>
    <div className="comments">
      {props.map(comment => (
        <>
          {console.log(comment)}
          <Comment props={comment} />
        </>
      ))}
      <br/>
    </div>
  </>
);

CommentList.propTypes = {
  props: PropTypes.array,
}
