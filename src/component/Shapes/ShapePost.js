import PropTypes from 'prop-types';
import { ShapeUser } from './ShapeUser';
import { ShapeComment } from './ShapeComment';

export const ShapePost = PropTypes.shape({
  userId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: ShapeUser,
  comments: PropTypes.arrayOf(ShapeComment).isRequired,
});
