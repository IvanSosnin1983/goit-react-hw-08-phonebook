import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/auth/authOperations';
import { LoginForm } from '../../components/LoginForm/LoginForm';
import { selectIsLogin } from '../../redux/auth/authSelectors';
import { Navigate } from 'react-router-dom';

export const LoginPage = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector(selectIsLogin);

  const handleLogin = data => {
    console.log(data);
    dispatch(login(data));
  };

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }

  return (
    <div>
      <h1>Login Page</h1>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};
