import './PostInfo.scss';

type Props = {
  title: string,
  body: string,
};

export const PostInfo: React.FC<Props> = ({ title, body }) => (
  <>
    <p data-cy="post-title">
      <strong>{'Title: '}</strong>
      {title}
    </p>

    <p data-cy="post-body">
      <strong>{'Post: '}</strong>
      {body}
    </p>
  </>
);
