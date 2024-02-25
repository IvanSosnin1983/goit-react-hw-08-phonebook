import bg_home from '../../components/image/bg_home1.jpeg';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <>
      <h1 className={css.title}>Nice to see you in Contacts page!</h1>
      <img src={bg_home} alt="phonebook" className={css.img} />
    </>
  );
};

export default HomePage;
