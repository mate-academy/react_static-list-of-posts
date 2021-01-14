import PropTypes from 'prop-types';

export const CommentType = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export const CommentListType = PropTypes.arrayOf(
  PropTypes.shape(
    CommentType,
  ).isRequired,
);

export const UserType = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape(
    {
      city: PropTypes.string.isRequired,
      street: PropTypes.string.isRequired,
      suite: PropTypes.string.isRequired,
    },
  ).isRequired,
};

export const PostType = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape(UserType).isRequired,
  preparedComments: CommentListType.isRequired,
};
