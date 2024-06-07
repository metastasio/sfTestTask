import { FormEventHandler, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logIn } from '../store/userSlice';

export const LogInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
    }
  };

  return (
    <section className='login'>
      <form onSubmit={handleSubmit}>
        <img src='/img/Logomark_1_.svg' alt='Логотип Sirius Future' />
        <h1>Вход в Sirius Future</h1>
        <label htmlFor='email'></label>
        <input
          id='email'
          type='text'
          placeholder='E-mail'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor='password'></label>
        <input
          id='password'
          type='password'
          placeholder='Пароль'
          name='password'
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <label htmlFor='rememberMe'>Запомнить меня</label>
        <input id='rememberMe' type='checkbox' />

        <button>Войти</button>
        <Link to='/restore-password'>Я забыл пароль</Link>
        <Link to='/trainer-login'>Войти как тренер</Link>

        <p>Нет аккаунта?</p>
        <Link to='/registration'>Зарегистрироваться </Link>

        <button>RU</button>
        <button>EN</button>
      </form>
    </section>
  );
};
