import styles from './Pagination.module.scss';
import PaginationPageWithActive from './PaginationPageWithActive';
import PaginationPage from './PaginationPage';
import DoubleArrowL from '../../assets/doubleArrowL.svg?react';
import ArrowR from '../../assets/arrowR.svg?react';
import DoubleArrowR from '../../assets/doubleArrowR.svg?react';
import ArrowL from '../../assets/arrowL.svg?react';
import usePaginationSlice from '../../hooks/usePaginationSlice';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from './../../store/features/slice/slice';

export type TPagination = {
  pagesAmount: number;
  className?: string;
};

export default function Pagination({ pagesAmount }: TPagination) {
  const { pagination } = styles;

  const dispatch = useDispatch();
  const currentPage = useSelector((state: any) => state.counter.currentPage);
  const isDarkTheme = useSelector((state: any) => state.counter.isDarkTheme);

  const onChange = (currentPage: number) => {
    dispatch(setCurrentPage(currentPage));
  };

  const slicedPagesArray = usePaginationSlice({
    current: currentPage,
    amount: pagesAmount
  });

  const leftArrowProps = {
    isDarkTheme,
    disabled: currentPage < 2
  };

  const rightArrowProps = {
    isDarkTheme,
    disabled: currentPage >= pagesAmount
  };

  return (
    <div className={pagination}>
      <PaginationPage {...leftArrowProps} onClick={() => onChange(1)}>
        <DoubleArrowL />
      </PaginationPage>
      <PaginationPage
        {...leftArrowProps}
        onClick={() => onChange(currentPage - 1)}>
        <ArrowL />
      </PaginationPage>

      {slicedPagesArray.map(el => (
        <PaginationPageWithActive
          isDarkTheme={isDarkTheme}
          onClick={() => onChange(el)}
          isActive={currentPage === el}
          key={el}>
          {el}
        </PaginationPageWithActive>
      ))}
      <PaginationPage
        {...rightArrowProps}
        onClick={() => onChange(currentPage + 1)}>
        <ArrowR />
      </PaginationPage>
      <PaginationPage
        {...rightArrowProps}
        onClick={() => onChange(pagesAmount)}>
        <DoubleArrowR />
      </PaginationPage>
    </div>
  );
};
