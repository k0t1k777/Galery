import cn from 'classnames/bind';
import Header from '../Header/Header';
import Main from '../Main/Main';
import styles from './App.module.scss';
import { useSelector } from 'react-redux';

const cx = cn.bind(styles);

export default function App() {
  const isDarkTheme = useSelector((state: any) => state.counter.isDarkTheme);

  return (
    <div className={cx('app', { 'app--dark': isDarkTheme === 'dark' })}>
      <Header />
      <Main />
    </div>
  );
}
