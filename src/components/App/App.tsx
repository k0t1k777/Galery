// import { useCallback, useEffect } from 'react';
import cn from 'classnames/bind';
import Header from '../Header/Header';
import Main from '../Main/Main';
import styles from './App.module.scss';
import * as Api from '../../services/requests';
import * as ApiQuery from '../../services/api';
import { useSelector, useDispatch } from 'react-redux';
import {
  setPictures,
  setAmount,
  setLoading
} from '../../store/features/slice/slice';

const cx = cn.bind(styles);

export default function App() {
  const dispatch = useDispatch();
  const isDarkTheme = useSelector((state: any) => state.counter.isDarkTheme);




  // const dataAuthorIdCallback = useCallback(() => {
  //   if (dataAuthorId.isSuccess) {
  //     let authorId = dataAuthorId.data[0]?.id;
  //     console.log('authorId: ', authorId);
  //   }
  // }, [dataAuthorId]);

  // useEffect(() => {
  //   dataAuthorIdCallback();
  // }, [dataAuthorId]);


  // const dataLocationIdCallback = useCallback(() => {
  //   if (dataLocationId.isSuccess) {
  //     let locationId = dataLocationId.data[0]?.id;
  //     console.log('locationId: ', locationId);
  //   }
  // }, [dataLocationId]);

  // useEffect(() => {
  //   dataLocationIdCallback();
  // }, [dataLocationId]);

  // useEffect(() => {
  //   let authorId = 0;
  //   let locationId = 0;
  //   dispatch(setLoading(true));
    
  //   if (dataAuthorId.isSuccess) {
  //     authorId = dataAuthorId.data[0]?.id;
  //   }
  //   if (dataLocationId.isSuccess) {
  //     locationId = dataLocationId.data[0]?.id;
  //   }
  //   if (dataAuthorId.isSuccess || dataLocationId.isSuccess) {

  //     Api.getPagination(
  //       currentPage,
  //       pagesAmount,
  //       inputValue,
  //       authorId,
  //       locationId,
  //       fromDate,
  //       beforeDate
  //     )
  //       .then(data => {
  //         dispatch(setPictures(data));
  //       })
  //       .catch(error => {
  //         console.error(error);
  //       });

  //     Api.getPaginationAmount(
  //       inputValue,
  //       authorId,
  //       locationId,
  //       fromDate,
  //       beforeDate
  //     )
  //       .then(data => {
  //         dispatch(setAmount(data.length));
  //         dispatch(setLoading(false));
  //       })
  //       .catch(error => {
  //         console.error(error);
  //         dispatch(setLoading(false));
  //       });
  //   }
  // }, [
  //   dataAuthorId,
  //   dataLocationId,
  //   pagesAmount,
  //   currentPage,
  //   inputValue,
  //   authorValue,
  //   locationValue,
  //   fromDate,
  //   beforeDate
  // ]);

  return (
    <div className={cx('app', { 'app--dark': isDarkTheme === 'dark' })}>
      <Header />
      <Main />
    </div>
  );
}
