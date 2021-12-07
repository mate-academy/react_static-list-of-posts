type Props = {
  title: string,
  body: string,
};

export const PostInfo: React.FC<Props> = ({ title, body }) => (
  <>
    <strong>{'Post title: '}</strong>
    {title}
    <p>
      <strong>{'Post text: '}</strong>
      {body}
    </p>
  </>
);
