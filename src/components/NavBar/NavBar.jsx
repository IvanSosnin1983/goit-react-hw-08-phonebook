import { Link } from 'react-router-dom';
import AuthMenu from './AuthMenu/AuthMenu';
import UserMenu from './UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLogin } from '../../redux/auth/authSelectors';
import { FaAddressBook } from 'react-icons/fa';
import css from './Navbar.module.css';

const Navbar = () => {
  const isLogin = useSelector(selectIsLogin);
  return (
    <div className={css.navbar}>
      <Link to="/" className={css.link}>
        <FaAddressBook className={css.logo} />
        <p className={css.text}>phonebook</p>
      </Link>
      {isLogin ? <UserMenu /> : <AuthMenu />}
    </div>
  );
};
export default Navbar;
