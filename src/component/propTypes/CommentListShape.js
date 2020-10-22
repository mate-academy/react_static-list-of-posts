import PropTypes from 'prop-types';
import { CommentShape } from './CommentShape';

export const CommentListShape = PropTypes.arrayOf(CommentShape);
