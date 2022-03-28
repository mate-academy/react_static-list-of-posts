type Props = {
  title: string,
  body: string,
};

export const PostInfo: React.FC<Props> = ({ title, body }) => (
  <div>
    <strong>
      {title[0].toLocaleUpperCase() + title.slice(1)}
    </strong>
    <p>
      <strong>
        Post:
      </strong>
      {' '}
      {`"${body}"`}
    </p>
  </div>
);
