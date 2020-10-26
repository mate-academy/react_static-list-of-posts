import PropTypes from 'prop-types';
import { CommentPropTypes } from './comment';

export const CommentListPropTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      ...CommentPropTypes,
    }).isRequired,
  ).isRequired,
};
