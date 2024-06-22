import PaginationPage, { PaginationPageProps } from './PaginationPage';

interface IProps extends PaginationPageProps {
  isActive?: boolean;
  isDarkTheme?: string;
}

export default function PaginationPageWithActive({
  isDarkTheme,
  isActive,
  className,
  ...other
}: IProps) {
  return (
    <PaginationPage isDarkTheme={isDarkTheme} isActive={isActive} {...other} />
  );
}
