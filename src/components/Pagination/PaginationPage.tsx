import { FC, ButtonHTMLAttributes } from 'react';
import cn from 'classnames/bind';
import styles from './PaginationPage.module.scss';

const cx = cn.bind(styles);

export interface PaginationPageProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  isDarkTheme?: string;
  isActive?: boolean;
}

const PaginationPage: FC<PaginationPageProps> = ({
  isDarkTheme,
  className,
  isActive,
  ...other
}) => (
  <button
    type="button"
    className={cx('PaginationPage', {
      'PaginationPage--dark': isDarkTheme === 'dark',
      'PaginationPageWithActive': isActive,
      'PaginationPageWithActive--dark': isDarkTheme === 'dark' && isActive,
    })}
    {...other}
  />
);

export default PaginationPage;
