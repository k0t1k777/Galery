import { FC } from 'react';
import styles from './Pagination.module.scss';
import PaginationPageWithActive from './PaginationPageWithActive';
import PaginationPage from './PaginationPage';
import DoubleArrowL from '../../assets/doubleArrowL.svg?react';
import ArrowR from '../../assets/arrowR.svg?react';
import DoubleArrowR from '../../assets/doubleArrowR.svg?react';
import ArrowL from '../../assets/arrowL.svg?react';
import usePaginationSlice from '../../hooks/usePaginationSlice';
import { useDispatch, useSelector } from 'react-redux';
import { SliceProps, setCurrentPage } from './../../store/features/slice/slice'

export type TPagination = {
  pagesAmount: number;
  className?: string;
};

const Pagination: FC<TPagination> = ({
  pagesAmount,
}) => {
  const { Pagination } = styles;

  const dispatch = useDispatch();
  const currentPage = useSelector((state: SliceProps) => state.currentPage);
  const isDarkTheme = useSelector((state: SliceProps) => state.isDarkTheme);

  const onChange = (currentPage: number) => {
    dispatch(setCurrentPage(currentPage));
  };

  const slicedPagesArray = usePaginationSlice({
    current: currentPage,
    amount: pagesAmount,
  });

  const leftArrowProps = {
    isDarkTheme,
    disabled: currentPage < 2,
  };

  const rightArrowProps = {
    isDarkTheme,
    disabled: currentPage >= pagesAmount,
  };

  return (
    <div className={Pagination}>
      <PaginationPage {...leftArrowProps} onClick={() => onChange(1)}>
        <DoubleArrowL />
      </PaginationPage>
      <PaginationPage
        {...leftArrowProps}
        onClick={() => onChange(currentPage - 1)}
      >
        <ArrowL />
      </PaginationPage>

      {slicedPagesArray.map((el) => (
        <PaginationPageWithActive
          isDarkTheme={isDarkTheme}
          onClick={() => onChange(el)}
          isActive={currentPage === el}
          key={el}
        >
          {el}
        </PaginationPageWithActive>
      ))}
      <PaginationPage
        {...rightArrowProps}
        onClick={() => onChange(currentPage + 1)}
      >
        <ArrowR />
      </PaginationPage>
      <PaginationPage
        {...rightArrowProps}
        onClick={() => onChange(pagesAmount)}
      >
        <DoubleArrowR />
      </PaginationPage>
    </div>
  );
};

export default Pagination;
