import s from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <div className={s.error}>
      <h2>Something went wrong! Try again....</h2>
    </div>
  );
};

export default ErrorMessage;