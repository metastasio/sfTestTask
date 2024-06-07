import { Link } from 'react-router-dom';

export const LogInPage = () => {
  return (
    <section className='login'>
      <form>
        <img src='/img/Logomark_1_.svg' alt='Логотип Sirius Future' />
        <h1>Вход в Sirius Future</h1>
        <label htmlFor='email'></label>
        <input id='email' type='text' placeholder='E-mail' />

        <label htmlFor='password'></label>
        <input id='password' type='text' placeholder='Пароль' />

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
