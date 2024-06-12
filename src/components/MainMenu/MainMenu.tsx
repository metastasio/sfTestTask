import { Button } from '../Button/Button';
import { MenuItem } from './MenuItem';

import './mainmenu.css';

export const MainMenu = () => {
  return (
    <section className='menu'>
      <img
        className='menu_logo'
        src='/img/menu/logo_menu.svg'
        alt='Логотип Sirius Future'
        width='148'
        height='58'
      />
      <nav>
        <ul className='menu_nav'>
          <MenuItem name='Главная' url='/' iconType='home' />
          <MenuItem name='Расписание' url='/schedule' iconType='schedule' />
          <MenuItem name='Оплата' url='/payment' iconType='payment' disabled />
          <MenuItem
            name='Достижения'
            url='/achivements'
            iconType='achivements'
            disabled
          />
          <MenuItem
            name='Тренажеры'
            url='/trainings'
            iconType='trainings'
            disabled
          />
          <MenuItem
            name='Библиотека'
            url='/library'
            iconType='library'
            disabled
          />
          <MenuItem
            name='Проверка связи'
            url='/connection'
            iconType='connection'
            disabled
          />
          <MenuItem
            name='Настройки'
            url='/settings'
            iconType='settings'
            disabled
          />
          <MenuItem
            name='Вопросы'
            url='/questions'
            iconType='questions'
            disabled
          />
        </ul>
      </nav>
      <div className='menu_adv_banner'>
        <h3 className='menu_adv_banner_title'>Учитесь бесплатно</h3>
        <p className='menu_adv_banner_content'>
          Приводите друзей с детьми заниматься в Sirius Future и получайте
          подарки!
        </p>
        <Button content='Узнать' classes='button_adv_side' />
      </div>
    </section>
  );
};
