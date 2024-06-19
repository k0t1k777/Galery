import { useSelector } from 'react-redux';
import styles from './Preloader.module.scss';
import cn from 'classnames/bind';

const cx = cn.bind(styles);

export default function Preloader() {
  const { preloader } = styles;
  const isDarkTheme = useSelector((state: any) => state.counter.isDarkTheme);

  return (
    <div className={preloader}>
      <div
        className={cx('preloader__loader', {
          'preloader__loader--dark': isDarkTheme === 'dark'
        })}></div>
    </div>
  );
}
