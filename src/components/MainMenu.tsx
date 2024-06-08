import { Link } from 'react-router-dom';

export const MainMenu = () => {
  return (
    <div>
      <img src='' alt='Логотип Sirius Future' />
      <ul>
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
      <div className='adv_banner_menu'>
        <h3>Учитесь бесплатно</h3>
        <p>
          Приводите друзей с детьми заниматься в Sirius Future и получайте
          подарки!
        </p>
        <button>Узнать</button>
      </div>
    </div>
  );
};
