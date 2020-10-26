import PropTypes from 'prop-types';
import { UserShape } from './UserShape';

export const PostShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: UserShape.isRequired,
}).isRequired;
