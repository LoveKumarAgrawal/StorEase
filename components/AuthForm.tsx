type FormType = "sign-in" | "sign-up";

const AuthForm = ({ type }: { type: FormType }) => {
  return <div>{type}</div>;
};

export default AuthForm;
