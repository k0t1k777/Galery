import cn from 'classnames/bind';
import styles from './Arrow.module.scss';
import { useSelector } from 'react-redux';
import { SliceProps } from '../../store/features/slice/slice';

const cx = cn.bind(styles);

interface ArrowProps {
  isOpen: boolean;
}

export default function Arrow({ isOpen }: ArrowProps) {
  const isDarkTheme = useSelector((state: SliceProps) => state.isDarkTheme);

  return (
    <div
      className={cx('Arrow__arrow', {
        Arrow__opened: isOpen,
        Arrow__dark: isDarkTheme === 'dark',
      })}
    ></div>
  );
};
