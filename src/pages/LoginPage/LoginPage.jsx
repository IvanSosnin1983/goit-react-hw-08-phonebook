import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/auth/authOperations';
import { LoginForm } from '../../components/LoginForm/LoginForm';
import { selectError, selectIsLoading } from '../../redux/auth/authSelectors';
// import { Navigate } from 'react-router-dom';

export const LoginPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);
  const dispatch = useDispatch();

  const handleLogin = data => {
    dispatch(login(data));
  };

  // if (isLogin) {
  //   return <Navigate to="/contacts" />;
  // }

  return (
    <div>
      <h1>Login Page</h1>
      {isLoading && <p>. . . Login in progress</p>}
      <LoginForm onSubmit={handleLogin} />
      {isError && <p>{isError}</p>}
    </div>
  );
};
