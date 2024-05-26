import styles from './Header.module.scss';
import FWT from './../../assets/FWT.svg?react';
import cn from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { SliceProps, setIsDarkTheme } from '../../store/features/slice/slice';

const cx = cn.bind(styles);

export default function Header() {
  const { header } = styles;
  const dispatch = useDispatch();
  const isDarkTheme = useSelector((state: SliceProps) => state.isDarkTheme);

  const toggleTheme = () => {
    if (isDarkTheme === 'dark') {
      document.documentElement.classList.remove('root--dark');
      dispatch(setIsDarkTheme('light'));
    } else {
      document.documentElement.classList.add('root--dark');
      dispatch(setIsDarkTheme('dark'));
    }
  };

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
