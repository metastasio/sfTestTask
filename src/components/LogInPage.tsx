export const LogInPage = () => {
  return (
    <section className='login'>
      <form>
        <img src='/img/Logomark_1_.svg' alt='Логотип Sirius Future' />
        <h1>Вход в Sirius Future</h1>
        <label htmlFor=''></label>
        <input type='text' />

        <label htmlFor=''></label>
        <input type='text' />

        <label htmlFor=''></label>
        <input type='checkbox' />

        <button>Войти</button>
        <a href=''>Я забыл пароль</a>
        <a href=''>Войти как тренер</a>

        <p>Нет аккаунта?</p>
        <a href=''>Зарегистрироваться</a>

        <button>RU</button>
        <button>EN</button>
      </form>
    </section>
  );
};
