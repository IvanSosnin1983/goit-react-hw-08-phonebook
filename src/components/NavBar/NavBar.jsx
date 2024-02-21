import { Link } from 'react-router-dom';
import AuthMenu from './AuthMenu/AuthMenu';
import UserMenu from './UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLogin } from '../../redux/auth/authSelectors';
const Navbar = () => {
  const isLogin = useSelector(selectIsLogin);
  console.log(isLogin);
  return (
    <>
      <Link to="/">Logo</Link>
      {isLogin ? <UserMenu /> : <AuthMenu />}
    </>
  );
};
export default Navbar;
