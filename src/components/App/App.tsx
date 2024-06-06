import { useEffect } from 'react';
import cn from 'classnames/bind';
import Header from '../Header/Header';
import Main from '../Main/Main';
import styles from './App.module.scss';
import * as Api from '../../services/requests';
import { pagesAmount } from '../utills/constants';
import { useSelector, useDispatch } from 'react-redux';
import {
  SliceProps,
  setPictures,
  setAmount,
  setShowPictures,
  setLoading
} from '../../store/features/slice/slice';

const cx = cn.bind(styles);

export default function App() {
  const dispatch = useDispatch();

  const pictures = useSelector((state: SliceProps) => state.pictures);
  const currentPage = useSelector((state: SliceProps) => state.currentPage);
  const isDarkTheme = useSelector((state: SliceProps) => state.isDarkTheme);
  const authorValue = useSelector((state: SliceProps) => state.authorValue);
  const locationValue = useSelector((state: SliceProps) => state.locationValue);
  const fromDate = useSelector((state: SliceProps) => state.fromDate);
  const beforeDate = useSelector((state: SliceProps) => state.beforeDate);
  const inputValue = useSelector((state: SliceProps) => state.inputValue);

  useEffect(() => {
    let authorId = 0;
    let locationId = 0;
    dispatch(setLoading(true));
    Promise.all([
      Api.getSearchAuthorId(authorValue),
      Api.getSearchLocation(locationValue)
    ])
      .then(([author, location]) => {
        authorId = author[0] && author[0].id;
        locationId = location[0] && location[0].id;
      })
      .then(() => {
        Api.getPagination(
          currentPage,
          pagesAmount,
          inputValue,
          authorId,
          locationId,
          fromDate,
          beforeDate
        )
          .then(data => {
            dispatch(setPictures(data));
          })
          .catch(error => {
            console.error(error);
          });
        Api.getPaginationAmount(
          inputValue,
          authorId,
          locationId,
          fromDate,
          beforeDate
        )
          .then(data => {
            dispatch(setAmount(data.length));
            dispatch(setLoading(false));
          })
          .catch(error => {
            console.error(error);
            dispatch(setLoading(false));
          });
      });
  }, [
    currentPage,
    pagesAmount,
    inputValue,
    authorValue,
    locationValue,
    fromDate,
    beforeDate
  ]);

  useEffect(() => {
    dispatch(setShowPictures(pictures));
  }, [pictures]);

  return (
    <div className={cx('app', { 'app--dark': isDarkTheme === 'dark' })}>
      <Header />
      <Main />
    </div>
  );
}
