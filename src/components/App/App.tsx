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
  setLoading
} from '../../store/features/slice/slice';

const cx = cn.bind(styles);

export default function App() {
  const dispatch = useDispatch();
  const currentPage = useSelector((state: any) => state.counter.currentPage);
  const isDarkTheme = useSelector((state: any) => state.counter.isDarkTheme);
  const authorValue = useSelector((state: any) => state.counter.authorValue);
  const fromDate = useSelector((state: any) => state.counter.fromDate);
  const beforeDate = useSelector((state: any) => state.counter.beforeDate);
  const inputValue = useSelector((state: any) => state.counter.inputValue);
  const locationValue = useSelector(
    (state: any) => state.counter.locationValue
  );

  // Логика RTK Query поиска по автору
  const dataAuthorId = ApiQuery.useGetSearchAuthorIdQuery(authorValue);

  const dataAuthorIdCallback = useCallback(() => {
    if (dataAuthorId.isSuccess) {
      let authorId = dataAuthorId.data[0]?.id;
      console.log('authorId: ', authorId);
    }
  }, [dataAuthorId]);

  useEffect(() => {
    dataAuthorIdCallback()
  }, [dataAuthorId])

    // Логика RTK Query поиска по локации

  const dataLocationId = ApiQuery.useGetSearchLocationIdQuery(locationValue);

  const dataLocationIdCallback = useCallback(() => {
    if (dataLocationId.isSuccess) {
      let locationId = dataLocationId.data[0]?.id;
      console.log('locationId: ', locationId);
    }
  }, [dataLocationId]);

  useEffect(() => {
    dataLocationIdCallback();
  }, [dataLocationId]);


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
    pagesAmount,
    currentPage,
    inputValue,
    authorValue,
    locationValue,
    fromDate,
    beforeDate
  ]);

  return (
    <div className={cx('app', { 'app--dark': isDarkTheme === 'dark' })}>
      <Header />
      <Main />
    </div>
  );
}
