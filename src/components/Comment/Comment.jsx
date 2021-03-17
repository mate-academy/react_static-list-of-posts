import React from 'react';
import PropTypes from 'prop-types';
import './Comment.scss';

export const Comment = ({props}) => (
  <div className="comment">
    <p className="comment__header">
    ${props.name} / <a href="#">${props.email}</a>
    </p>
    <br/>
    <p className="comment__body">: ${props.body}</p>
    <hr/>
  </div>
);

Comment.propTypes = {
  props: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }),
}
