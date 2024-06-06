import { FC, ButtonHTMLAttributes } from 'react';
import cn from 'classnames/bind';
import styles from './PaginationPage.module.scss';

const cx = cn.bind(styles);

export interface PaginationPageProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  isDarkTheme?: string;
}

const PaginationPage: FC<PaginationPageProps> = ({
  isDarkTheme,
  className,
  ...other
}) => (
  <button
    type="button"
    className={cx('PaginationPage', {
      'PaginationPage--dark': isDarkTheme === 'dark'
    })}
    {...other}
  />
);

export default PaginationPage;
