type Props = {
  classes: string;
  body: string;
  name: string;
  email: string;
};

export const Post: React.FC<Props> = ({
  classes,
  body,
  name,
  email,
}) => (
  <div className={`${classes}__content`}>
    <h5 className={`${classes}__user-info`}>
      {`${name} (${email})`}
    </h5>
    <p className={`${classes}__body`}>
      {body}
    </p>
  </div>
);
