import './Header.css';
import FWT from './../../assets/FWT.svg?react';
import ChangeTheme from './../../assets/Change-theme.svg?react';

export default function Header() {
  return (
    <div className='header'>
      <FWT />
      <ChangeTheme className='header__button'/>
    </div>
  );
}
