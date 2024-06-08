import { Header } from '../Header/Header';
import { MainMenu } from '../MainMenu/MainMenu';

import './mainpage.css';

export const MainPage = () => {
  return (
    <>
      <Header />
      <MainMenu />
      <main className='main_page'>
        <div className='main_page_adv1'>
          <p className='main_page_adv1_title'>
            До 31 декабря любой курс со скидкой 20%
          </p>
          <p className='main_page_adv1_content'>
            До конца года у вас есть уникальная возможность воспользоваться
            нашей новогодней скидкой 20% на любой курс!
          </p>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </main>
    </>
  );
};
