import styles from './Header.module.scss';
import FWT from './../../assets/FWT.svg?react';
import cn from 'classnames/bind';

const cx = cn.bind(styles);

interface HeaderProps {
  toggleTheme: () => void;
  isDarkTheme: string;
}

export default function Header({ toggleTheme, isDarkTheme }: HeaderProps) {
  const { header } = styles;
  return (
    <div className={header}>
      <FWT />
      <button
        className={cx('header__button', {
          'header__button--dark': isDarkTheme === 'dark',
        })}
        onClick={toggleTheme}
      />
    </div>
  );
}
