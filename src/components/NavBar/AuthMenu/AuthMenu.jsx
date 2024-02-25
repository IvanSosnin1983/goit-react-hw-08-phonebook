import { NavLink } from 'react-router-dom';
import css from './AuthMenu.module.css';

const AuthMenu = () => {
  return (
    <div className={css.block}>
      <NavLink to="register" className={css.link}>
        Register
      </NavLink>
      |
      <NavLink to="login" className={css.link}>
        Login
      </NavLink>
    </div>
  );
};
export default AuthMenu;
