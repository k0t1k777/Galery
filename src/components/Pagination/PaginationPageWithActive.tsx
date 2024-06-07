import { FC } from 'react';
import PaginationPage, { PaginationPageProps } from './PaginationPage';

interface IProps extends PaginationPageProps {
  isActive?: boolean;
  isDarkTheme?: string;
}

const PaginationPageWithActive: FC<IProps> = ({
  isDarkTheme,
  isActive,
  className,
  ...other
}) => {

  return (
    <PaginationPage
      isDarkTheme={isDarkTheme}
      isActive={isActive}
      {...other}
    />
  );
};

export default PaginationPageWithActive;
