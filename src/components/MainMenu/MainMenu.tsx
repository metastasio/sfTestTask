import { Link } from 'react-router-dom';
import './mainmenu.css';

export const MainMenu = () => {
  return (
    <section className='menu'>
      <img
        className='menu_logo'
        src='/img/menu/logo_menu.svg'
        alt='Логотип Sirius Future'
      />
      <nav>
        <ul className='menu_nav'>
          <li>
            <Link to='/'>Главная</Link>
          </li>
          <li>
            <Link to='/schedule'>Расписание</Link>
          </li>
          <li>
            <Link to='/payment'>Оплата</Link>
          </li>
          <li>
            <Link to='/achivements'>Достижения</Link>
          </li>
          <li>
            <Link to='/trainings'>Тренажеры</Link>
          </li>
          <li>
            <Link to='/library'>Библиотека</Link>
          </li>
          <li>
            <Link to='/connection'>Проверка связи</Link>
          </li>
          <li>
            <Link to='/settings'>Настройки</Link>
          </li>
          <li>
            <Link to='/questions'>Вопросы</Link>
          </li>
        </ul>
      </nav>
      <div className='menu_adv_banner'>
        <h3 className='menu_adv_banner_title'>Учитесь бесплатно</h3>
        <p className='menu_adv_banner_content'>
          Приводите друзей с детьми заниматься в Sirius Future и получайте
          подарки!
        </p>
        <button className='menu_adv_banner_button'>Узнать</button>
      </div>
    </section>
  );
};
