import { useCallback, useEffect } from 'react';
import cn from 'classnames/bind';
import Header from '../Header/Header';
import Main from '../Main/Main';
import styles from './App.module.scss';
import * as Api from '../../services/requests';
import * as ApiQuery from '../../services/api';
import { pagesAmount } from '../utills/constants';
import { useSelector, useDispatch } from 'react-redux';
import {
  setPictures,
  setAmount,
  setShowPictures,
  setLoading,
} from '../../store/features/slice/slice';

const cx = cn.bind(styles);

export default function App() {
  const dispatch = useDispatch();
  const pictures = useSelector((state: any) => state.counter.pictures);
  const currentPage = useSelector((state: any) => state.counter.currentPage);
  const isDarkTheme = useSelector((state: any) => state.counter.isDarkTheme);
  const authorValue = useSelector((state: any) => state.counter.authorValue);
  const locationValue = useSelector((state: any) => state.counter.locationValue);
  const fromDate = useSelector((state: any) => state.counter.fromDate);
  const beforeDate = useSelector((state: any) => state.counter.beforeDate);
  const inputValue = useSelector((state: any) => state.counter.inputValue);

  const dataPictures = ApiQuery.useGetPicturesQuery('');
  console.log('dataPictures: ', dataPictures);

  // const setPicturesCallback = useCallback(() => {
  //   if (dataPictures.isSuccess) {
  //     dispatch(setWeather(forecastData.data));
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [forecastData]);

  // useEffect(() => {
  //   setPicturesCallback();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [forecastData]);

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
