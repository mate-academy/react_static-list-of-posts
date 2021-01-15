import PropTypes from 'prop-types';

export const TypeOfComment = PropTypes.shape({
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
});

export const TypeOfCommentsList = PropTypes.arrayOf(TypeOfComment);

export const TypeOfUser = PropTypes.shape({
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
  }),
});

export const TypeOfPost = PropTypes.shape({
  body: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(TypeOfCommentsList),
  user: TypeOfUser,
});

export const TypeOfPostsList = PropTypes.arrayOf(TypeOfPost);
