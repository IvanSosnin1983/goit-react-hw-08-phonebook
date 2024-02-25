import { useDispatch } from 'react-redux';
import { signup } from '../../redux/auth/authOperations';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSignup = data => {
    dispatch(signup(data));
  };

  return (
    <div>
      <h2>Please, create your account!</h2>
      <RegisterForm onSubmit={handleSignup} />
    </div>
  );
};
export default RegisterPage;
