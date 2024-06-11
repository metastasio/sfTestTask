import { NavLink } from 'react-router-dom';
import './notFound.css';

export const NotFound = () => {
  return (
    <>
      <h1 className='notfound_title'>Not Found</h1>
      
        <NavLink to='/' className='notfound_link'>
          На главную
        </NavLink>
   
    </>
  );
};
