import { useState } from 'react';
import { Profile } from '../Profile/Profile';

import './header.css';

type HeaderProps = {
  userName: string;
};

export const Header = (props?: HeaderProps) => {
  const [isProfileClosed, openProfile] = useState(true);

  const toggleProfile = () => {
    openProfile((prev) => !prev);
  };

  return (
    <header className='header'>
      {props?.userName ? (
        <h2 className='header_title'>
          Добро пожаловать,{' '}
          <span className='header_username'>{props?.userName}</span>!
        </h2>
      ) : null}
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
