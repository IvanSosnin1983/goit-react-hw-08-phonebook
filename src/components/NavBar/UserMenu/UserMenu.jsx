import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../../../redux/auth/authSelectors';
import { logout } from '../../../redux/auth/authOperations';
import css from './UserMenu.module.css';
import { FaRegUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const onLogout = () => dispatch(logout());
  return (
    <>
      <Link to="contacts" className={css.menu}>
        Contacts
      </Link>
      <div className={css.block}>
        <FaRegUser className={css.user_icon} />
        <p className={css.name}>Hi, {user.name}!</p>
        <button type="button" onClick={onLogout} className={css.button}>
          Logout
        </button>
      </div>
    </>
  );
};

export default UserMenu;
