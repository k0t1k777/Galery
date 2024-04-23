import styles from './Header.module.scss';
import FWT from './../../assets/FWT.svg?react';
import ChangeTheme from './../../assets/Change-theme.svg?react';

export default function Header() {
  const { header, header__button } = styles;
  return (
    <div className={header}>
      <FWT />
      <ChangeTheme className={header__button} />
    </div>
  );
}
