import { useRef, useState } from 'react';
import { Profile } from '../Profile/Profile';

import './header.css';

type HeaderProps = {
  userName?: string;
};

export const Header = (props: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const openProfileRef = useRef(null);

  const toggleProfile = () => {
    setIsOpen((prev) => !prev);
  };

  const closeProfile = () => {
    setIsOpen(false);
  };

  return (
    <header className='header'>
      {props?.userName && (
        <h2 className='header_title'>
          Добро пожаловать,{' '}
          <span className='header_username'>{props?.userName}</span>!
        </h2>
      )}

      <div
        ref={openProfileRef}
        className='header_personal'
        onClick={toggleProfile}
      >
        <button className='header_msg'>
          <div className='header_unread_msg'>2</div>
          <img src='/img/Messages, Chat.svg' alt='Непрочитанные сообщения' />
        </button>
        <button className='header_profile'>
          <img src='/img/avatar.jpg' alt='Ваш профиль' />
        </button>
        <button className='header_profile_expand'></button>
      </div>
      {isOpen && (
        <Profile
          openProfileRef={openProfileRef}
          // isProfileClosed={isOpen}
          toggleProfile={toggleProfile}
          closeProfile={closeProfile}
        />
      )}
    </header>
  );
};
