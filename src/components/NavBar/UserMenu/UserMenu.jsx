import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../../../redux/auth/authSelectors';
import { logout } from '../../../redux/auth/authOperations';

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const onLogout = () => dispatch(logout());
  return (
    <>
      <div>{user.name}</div>
      <button type="button" onClick={onLogout}>
        Logout
      </button>
    </>
  );
};

export default UserMenu;
