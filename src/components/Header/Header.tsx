import { useState } from 'react';
import { useAppSelector } from '../../store/hooks';
import { Profile } from '../Profile/Profile';

import './header.css';

export const Header = () => {
  const [isProfileClosed, openProfile] = useState(true);
  const { userName } = useAppSelector((state) => state.user);

  const toggleProfile = () => {
    openProfile((prev) => !prev);
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
        <button className='header_profile' onClick={toggleProfile}>
          <img src='/img/avatar.jpg' alt='Ваш профиль' />
        </button>
        <button
          className='header_profile_expand'
          onClick={toggleProfile}
        ></button>
      </div>
      <Profile
        isProfileClosed={isProfileClosed}
        toggleProfile={toggleProfile}
      />
    </header>
  );
};
