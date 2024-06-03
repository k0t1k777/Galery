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
  setAuthors,
  setLocations,
  setAmount,
  setShowPictures,
} from '../../store/features/slice/slice';
import { useQuery } from 'react-query';
import {
  fetchPictures,
  fetchAuthors,
  fetchLocations,
} from '../../services/apiPainting.ts';

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

  // function usePicturesQuery() {
  //   return useQuery('pictures', fetchPictures);
  // }
  
  // function useAuthorsQuery() {
  //   return useQuery('authors', fetchAuthors);
  // }
  
  // function useLocationsQuery() {
  //   return useQuery('locations', fetchLocations);
  // }

  const dataPictures = useQuery('pictures', fetchPictures);
  console.log('dataPictures: ', dataPictures);

  const dataAithors = useQuery('authors', fetchAuthors);
  console.log('dataAithors: ', dataAithors);

  const dataLocation = useQuery('locations', fetchPictures);
  console.log('dataLocation: ', dataLocation);

  // console.log('isError: ', isError);
  // console.log('isLoading: ', isLoading);
  // console.log('data: ', data);

  // if (isLoading) {
  //   return <h3>Идет загрузка</h3>
  // }

  // const { data, isLoading, isError } = useQuery('locations', fetchLocations);


  useEffect(() => {
    let authorId = 0;
    let locationId = 0;
    Promise.all([
      Api.getSearchAuthorId(authorValue),
      Api.getSearchLocation(locationValue),
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
          .then((data) => {
            dispatch(setPictures(data));
          })
          .catch((error) => {
            console.error(error);
          });
        Api.getPaginationAmount(
          inputValue,
          authorId,
          locationId,
          fromDate,
          beforeDate
        )
          .then((data) => {
            dispatch(setAmount(data.length));
          })
          .catch((error) => {
            console.error(error);
          });
      });
  }, [
    currentPage,
    pagesAmount,
    inputValue,
    authorValue,
    locationValue,
    fromDate,
    beforeDate,
  ]);

  useEffect(() => {
    Api.getAuthors()
      .then((data) => {
        dispatch(setAuthors(data));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    Api.getLocations()
      .then((data) => {
        dispatch(setLocations(data));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    dispatch(setShowPictures(pictures));
  }, [pictures]);

  return (
    <div className={cx('App', { 'App--dark': isDarkTheme === 'dark' })}>
      <Header />
      <Main />
    </div>
  );
}
