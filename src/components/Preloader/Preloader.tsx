import { useSelector } from 'react-redux';
import styles from './Preloader.module.scss';
import { SliceProps } from '../../store/features/slice/slice';
import cn from 'classnames/bind';

const cx = cn.bind(styles);

export default function Preloader() {
  const { preloader } = styles;
  const isDarkTheme = useSelector((state: SliceProps) => state.isDarkTheme);

  return (
    <div className={preloader}>
      <div
        className={cx('preloader__loader', {
          'preloader__loader--dark': isDarkTheme === 'dark'
        })}></div>
    </div>
  );
}
