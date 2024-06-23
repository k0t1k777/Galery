import cn from 'classnames/bind';
import styles from 'src/components/ui/Arrow/Arrow.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store/features/slice/rootReducer';

const cx = cn.bind(styles);

interface ArrowProps {
  isOpen: boolean;
}

export default function Arrow({ isOpen }: ArrowProps) {
  const isDarkTheme = useSelector((state: RootState) => state.picture.isDarkTheme);

  return (
    <div
      className={cx('Arrow__arrow', {
        Arrow__opened: isOpen,
        Arrow__dark: isDarkTheme === 'dark'
      })}></div>
  );
}
