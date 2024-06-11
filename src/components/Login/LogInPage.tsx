import { FormEventHandler, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logIn } from '../../store/userSlice';

import './login.css';

export const LogInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidden, toggleHidden] = useState('password');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = data.get('email');
    const password = data.get('password');
    if (email && password) {
      dispatch(logIn(email));
      setEmail('');
      setPassword('');
      navigate('/');
    }
  };

  const handleVisibility = () => {
    toggleHidden((prev) => (prev === 'password' ? 'text' : 'password'));
  };

  return (
    <section className='login'>
      <img
        className='login_logo'
        src='/img/Logomark_1_.svg'
        alt='Логотип Sirius Future'
      />
      <h1 className='login_title'>Вход в Sirius Future</h1>
      <form className='login_form' onSubmit={handleSubmit}>
        <label className='sr_only' htmlFor='email'>
          E-mail
        </label>
        <input
          className='input_email'
          id='email'
          type='text'
          placeholder='E-mail'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <div className='login_password_wrapper'>
          <label className='sr_only' htmlFor='password'>
            Пароль
          </label>
          <input
            className='input_password'
            id='password'
            type={hidden}
            placeholder='Пароль'
            name='password'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
          <button
            type='button'
            className='login_password_show'
            onClick={handleVisibility}
          ></button>
        </div>

        <div className='login_rm'>
          <input className='login_rm_check' id='remember_me' type='checkbox' />
          <label className='login_rm_label' htmlFor='remember_me'>
            Запомнить меня
          </label>
        </div>

        <button className='login_enter'>Войти</button>
        <div className='login_enter_links'>
          <Link to='/restore-password'>Я забыл пароль</Link>
          <Link to='/trainer-login'>Войти как тренер</Link>
        </div>

        <p className='login_noacc'>Нет аккаунта?</p>
        <Link className='login_register' to='/registration'>
          Зарегистрироваться
        </Link>
      </form>

      <div className='login_lang_switch'>
        <button className='login_ru active_lng'>RU</button>
        <button className='login_en'>EN</button>
      </div>
    </section>
  );
};
