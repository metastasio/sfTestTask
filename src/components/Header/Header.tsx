import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { toggleProfile } from '../../store/userSlice';
import { Profile } from '../Profile/Profile';

import './header.css';

export const Header = () => {
  const { userName } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  //ПЕРЕДАТЬ В РЕБЕНКА
  const handleToggle = () => {
    dispatch(toggleProfile());
  };

  return (
    <header className='header'>
      <h2 className='header_title'>
        Добро пожаловать, <span className='header_username'>{userName}</span>!
      </h2>
      <div className='header_personal'>
        <button className='header_msg'>
          <div className='header_unread_msg'>2</div>
          <img src='/img/Messages, Chat.svg' alt='Непрочитанные сообщения' />
        </button>
        <button className='header_profile' onClick={handleToggle}>
          <img src='/img/avatar.jpg' alt='Ваш профиль' />
        </button>
        <button
          className='header_profile_expand'
          onClick={handleToggle}
        ></button>
      </div>
      <Profile />
    </header>
  );
};
