import cn from 'classnames/bind';
import Main from 'src/components/Main/Main';
import styles from 'src/components/App/App.module.scss';
import { useSelector } from 'react-redux';
import Header from 'src/components/Header/Header';
import { RootState } from 'src/store/features/slice/rootReducer';

const cx = cn.bind(styles);

export default function App() {
  const isDarkTheme = useSelector((state: RootState) => state.picture.isDarkTheme);

  return (
    <div className={cx('app', { 'app--dark': isDarkTheme === 'dark' })}>
      <Header />
      <Main />
    </div>
  );
}
