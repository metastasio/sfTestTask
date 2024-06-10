import { NavLink } from 'react-router-dom';
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
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M1.5699 9.38558C1.23057 9.62311 1.14804 10.0908 1.38558 10.4301C1.62311 10.7694 2.09076 10.852 2.4301 10.6144L1.5699 9.38558ZM12 3L12.4301 2.38558C12.1719 2.20481 11.8281 2.20481 11.5699 2.38558L12 3ZM21.5699 10.6144C21.9092 10.852 22.3769 10.7694 22.6144 10.4301C22.852 10.0908 22.7694 9.62311 22.4301 9.38558L21.5699 10.6144ZM14.25 21C14.25 21.4142 14.5858 21.75 15 21.75C15.4142 21.75 15.75 21.4142 15.75 21H14.25ZM8.25 21C8.25 21.4142 8.58579 21.75 9 21.75C9.41421 21.75 9.75 21.4142 9.75 21H8.25ZM3.75 10V9.25H2.25V10H3.75ZM9 22.1427H9.75V20.6427H9V22.1427ZM21.75 10V9.25H20.25V10H21.75ZM15 20.6427H14.25V22.1427H15V20.6427ZM2.4301 10.6144L12.4301 3.61442L11.5699 2.38558L1.5699 9.38558L2.4301 10.6144ZM11.5699 3.61442L21.5699 10.6144L22.4301 9.38558L12.4301 2.38558L11.5699 3.61442ZM15.75 21V15H14.25V21H15.75ZM15.75 15C15.75 13.4808 14.5192 12.25 13 12.25V13.75C13.6908 13.75 14.25 14.3092 14.25 15H15.75ZM13 12.25H11V13.75H13V12.25ZM11 12.25C9.48079 12.25 8.25 13.4808 8.25 15H9.75C9.75 14.3092 10.3092 13.75 11 13.75V12.25ZM8.25 15V21H9.75V15H8.25ZM2.25 10V19.3919H3.75V10H2.25ZM2.25 19.3919C2.25 20.9112 3.48159 22.1427 5.00083 22.1427V20.6427C4.31002 20.6427 3.75 20.0827 3.75 19.3919H2.25ZM5.00083 22.1427H9V20.6427H5.00083V22.1427ZM20.25 10V19.3919H21.75V10H20.25ZM20.25 19.3919C20.25 20.0827 19.69 20.6427 18.9992 20.6427V22.1427C20.5184 22.1427 21.75 20.9112 21.75 19.3919H20.25ZM18.9992 20.6427H15V22.1427H18.9992V20.6427Z'
                fill='#434B74'
              />
            </svg>

            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? 'menu_nav_active' : '')}
            >
              Главная
            </NavLink>
          </li>
          <li>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M16 2V6'
                stroke='#434B74'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M8 2V6'
                stroke='#434B74'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M3 9H21'
                stroke='#434B74'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M19 4H5C3.895 4 3 4.895 3 6V19C3 20.105 3.895 21 5 21H19C20.105 21 21 20.105 21 19V6C21 4.895 20.105 4 19 4Z'
                stroke='#434B74'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M7.01316 12.7285C6.87516 12.7285 6.76316 12.8405 6.76416 12.9785C6.76416 13.1165 6.87616 13.2285 7.01416 13.2285C7.15216 13.2285 7.26416 13.1165 7.26416 12.9785C7.26416 12.8405 7.15216 12.7285 7.01316 12.7285'
                stroke='#434B74'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M12.0132 12.7285C11.8752 12.7285 11.7632 12.8405 11.7642 12.9785C11.7642 13.1165 11.8762 13.2285 12.0142 13.2285C12.1522 13.2285 12.2642 13.1165 12.2642 12.9785C12.2642 12.8405 12.1522 12.7285 12.0132 12.7285'
                stroke='#434B74'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M17.0132 12.7285C16.8752 12.7285 16.7632 12.8405 16.7642 12.9785C16.7642 13.1165 16.8762 13.2285 17.0142 13.2285C17.1522 13.2285 17.2642 13.1165 17.2642 12.9785C17.2642 12.8405 17.1522 12.7285 17.0132 12.7285'
                stroke='#434B74'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M7.01316 16.7285C6.87516 16.7285 6.76316 16.8405 6.76416 16.9785C6.76416 17.1165 6.87616 17.2285 7.01416 17.2285C7.15216 17.2285 7.26416 17.1165 7.26416 16.9785C7.26416 16.8405 7.15216 16.7285 7.01316 16.7285'
                stroke='#434B74'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M12.0132 16.7285C11.8752 16.7285 11.7632 16.8405 11.7642 16.9785C11.7642 17.1165 11.8762 17.2285 12.0142 17.2285C12.1522 17.2285 12.2642 17.1165 12.2642 16.9785C12.2642 16.8405 12.1522 16.7285 12.0132 16.7285'
                stroke='#434B74'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>

            <NavLink
              to='/schedule'
              className={({ isActive }) => (isActive ? 'menu_nav_active' : '')}
            >
              Расписание
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/payment'
              className={({ isActive }) => (isActive ? 'menu_nav_active' : '')}
            >
              Оплата
            </NavLink>
          </li>
          <li>
            <NavLink to='/achivements'>Достижения</NavLink>
          </li>
          <li>
            <NavLink to='/trainings'>Тренажеры</NavLink>
          </li>
          <li>
            <NavLink to='/library'>Библиотека</NavLink>
          </li>
          <li>
            <NavLink to='/connection'>Проверка связи</NavLink>
          </li>
          <li>
            <NavLink to='/settings'>Настройки</NavLink>
          </li>
          <li>
            <NavLink to='/questions'>Вопросы</NavLink>
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
