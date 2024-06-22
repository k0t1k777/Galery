import cn from 'classnames/bind';
import Main from 'src/components/Main/Main';
import styles from 'src/components/App/App.module.scss';
import { useSelector } from 'react-redux';
import Header from 'src/components/Header/Header';

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
