import { FC } from 'react';
import PaginationPage, { PaginationPageProps } from './PaginationPage';
import cn from 'classnames/bind';
import styles from './PaginationPage.module.scss';

const cx = cn.bind(styles);

interface IProps extends PaginationPageProps {
  isActive: boolean;
  isDarkTheme?: string;
}

const PaginationPageWithActive: FC<IProps> = ({
  isDarkTheme,
  isActive,
  ...other
}) => {
  return (
    <PaginationPage
      isDarkTheme={isDarkTheme}
      className={cx(
        {'PaginationPageWithActive': isActive},
        {'PaginationPageWithActive--dark': isDarkTheme === 'dark' && isActive}
      )}
      {...other}
    />
  );
};

export default PaginationPageWithActive;
