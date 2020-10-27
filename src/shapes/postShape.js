import PropTypes from 'prop-types';
import { userShape } from './userShape';
import { commentShape } from './commentShape';

export const postShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: userShape.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape(commentShape).isRequired,
  ).isRequired,
}).isRequired;
