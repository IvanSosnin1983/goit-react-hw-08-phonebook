import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/auth/authOperations';
import { LoginForm } from '../../components/LoginForm/LoginForm';
import { selectError, selectIsLoading } from '../../redux/auth/authSelectors';

const LoginPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);
  const dispatch = useDispatch();

  const handleLogin = data => {
    dispatch(login(data));
  };

  return (
    <div>
      <h2>Please enter your email and password</h2>
      {isLoading && <p>. . . Login in progress</p>}
      <LoginForm onSubmit={handleLogin} />
      {isError && <p>{isError}</p>}
    </div>
  );
};
export default LoginPage;
