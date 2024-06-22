import { ButtonHTMLAttributes } from 'react';
import cn from 'classnames/bind';
import styles from './PaginationPage.module.scss';

const cx = cn.bind(styles);

export interface PaginationPageProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  isDarkTheme?: string;
  isActive?: boolean;
}

export default function PaginationPage({
  isDarkTheme,
  className,
  isActive,
  ...other
}: PaginationPageProps) {
  return (
    <button
      type="button"
      className={cx('pagination-page', {
        'pagination-page--dark': isDarkTheme === 'dark',
        'pagination-page-with-active': isActive,
        'pagination-page-with-active--dark': isDarkTheme === 'dark' && isActive
      })}
      {...other}
    />
  );
}
