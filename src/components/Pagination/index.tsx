import styles from 'src/components/Pagination/Pagination.module.scss';
import PaginationPageWithActive from 'src/components/Pagination/PaginationPageWithActive';
import PaginationPage from 'src/components/Pagination/PaginationPage';
import DoubleArrowL from 'src/assets/doubleArrowL.svg?react';
import ArrowR from 'src/assets/arrowR.svg?react';
import DoubleArrowR from 'src/assets/doubleArrowR.svg?react';
import ArrowL from 'src/assets/arrowL.svg?react';
import usePaginationSlice from 'src/hooks/usePaginationSlice';
import { setCurrentPage } from 'src/store/features/slice/slice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/store/features/slice/rootReducer';

export type TPagination = {
  pagesAmount: number;
  className?: string;
};

export default function Pagination({ pagesAmount }: TPagination) {
  const { pagination } = styles;

  const dispatch = useDispatch();
  const currentPage = useSelector((state: RootState) => state.picture.currentPage);
  const isDarkTheme = useSelector((state: RootState) => state.picture.isDarkTheme);

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
