import { useSelector } from 'react-redux';
import { selectUser } from '../../../redux/auth/authSelectors';

const UserMenu = () => {
  const user = useSelector(selectUser);
  return (
    <>
      <div>{user.name}</div>
      <button type="button">Logout</button>
    </>
  );
};

export default UserMenu;
