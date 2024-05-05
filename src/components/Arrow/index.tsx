import { FC } from 'react';
import cn from 'classnames/bind';
import SelectArrow from '../../assets/Down-black.svg?react';
import styles from './Arrow.module.scss';

export type TArrow = {
  isOpen: boolean;
  isDarkTheme?: string;
};

const cx = cn.bind(styles);

const Arrow: FC<TArrow> = ({ isOpen, isDarkTheme }) => (
  <div
    className={cx('Arrow__arrow', {
      Arrow__opened: isOpen,
      Arrow__dark: isDarkTheme === 'dark',
    })}
  >
    <SelectArrow />
  </div>
);

export default Arrow;
