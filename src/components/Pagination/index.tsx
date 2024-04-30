import { FC } from 'react';
import cn from 'classnames/bind';
import styles from './Pagination.module.scss';
import PaginationPageWithActive from './PaginationPageWithActive';
import PaginationPage from './PaginationPage';
import DoubleArrowL from '../../assets/doubleArrowL.svg?react';
import ArrowR from '../../assets/arrowR.svg?react';
import DoubleArrowR from '../../assets/doubleArrowR.svg?react';
import ArrowL from '../../assets/arrowL.svg?react';
import usePaginationSlice from '../../hooks/usePaginationSlice';

const cx = cn.bind(styles);

export type TPagination = {
  // isDarkTheme?: string;
  pagesAmount: number;
  currentPage: number;
  className?: string;
  onChange: (currentPage: number) => void;
};

const Pagination: FC<TPagination> = ({
  currentPage,
  // isDarkTheme,
  pagesAmount,
  className,
  onChange
}) => {
  const slicedPagesArray = usePaginationSlice({
    current: currentPage,
    amount: pagesAmount
  });

  const leftArrowProps = {
    // isDarkTheme,
    disabled: currentPage < 2
  };

  const rightArrowProps = {
    // isDarkTheme,
    disabled: currentPage >= pagesAmount
  };

  return (
    <div className={cx(className, 'Pagination')}>
      <PaginationPage {...leftArrowProps} onClick={() => onChange(1)}>
        <DoubleArrowL />
      </PaginationPage>
      <PaginationPage {...leftArrowProps} onClick={() => onChange(currentPage - 1)}>
        <ArrowL />
      </PaginationPage>

      {slicedPagesArray.map((el) => (
        <PaginationPageWithActive
          // isDarkTheme={isDarkTheme}
          onClick={() => onChange(el)}
          isActive={currentPage === el}
          key={el}>
          {el}
        </PaginationPageWithActive>
      ))}
      <PaginationPage {...rightArrowProps} onClick={() => onChange(currentPage + 1)}>
        <ArrowR />
      </PaginationPage>
      <PaginationPage {...rightArrowProps} onClick={() => onChange(pagesAmount)}>
        <DoubleArrowR />
      </PaginationPage>
    </div>
  );
};

export default Pagination;
