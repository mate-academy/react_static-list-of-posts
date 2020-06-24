import PropTypes from 'prop-types';
import { userShape } from './UserShape';

export const postListShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  body: PropTypes.string.isRequired,
  comment: PropTypes.array.isRequired,
  userId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  user: userShape.isRequired.isRequired,
});
