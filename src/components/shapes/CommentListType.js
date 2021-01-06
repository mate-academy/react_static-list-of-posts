import Proptypes from 'prop-types';
import { TypeComment } from './CommentTypes';

export const TypeCommentList = Proptypes.shape({
  comments: Proptypes.arrayOf(TypeComment),
}).isRequired;
