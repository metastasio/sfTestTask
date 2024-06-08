import { useAppSelector } from '../../store/hooks';

import './header.css';

export const Header = () => {
  const { userName } = useAppSelector((state) => state.user);
  return (
    <header className='header'>
      <h2 className='header_title'>
        Добро пожаловать, <span className='header_username'>{userName}</span>!
      </h2>
      <div className='header_personal'>
        <div className='header_unread_msg'>2</div>
        <button className='header_msg'>
          {/* <img src='/img/Messages, Chat.svg' alt='Непрочитанные сообщения' /> */}
        </button>
        <button className='header_profile'>
          {/* <img src='/img/avatar.png' alt='Ваш профиль' /> */}
        </button>
        <button className='header_profile_expand'></button>
      </div>
    </header>
  );
};
