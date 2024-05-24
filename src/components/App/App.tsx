import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import styles from './App.module.scss';
import * as Api from '../../api/requests';
import { Pictures, Authors, Locations } from './../Main/Main';
import cn from 'classnames/bind';
import { pagesAmount } from '../utills/constants';
import { useSelector, useDispatch } from 'react-redux';
import { SliceProps, setPictures } from './../../store/features/slice/slice'

const cx = cn.bind(styles);

export default function App() {
  const [authors, setAuthors] = useState<Authors[]>([]);
  const [locations, setLocations] = useState<Locations[]>([]);
  const [isDarkTheme, setIsDarkTheme] = useState('light');
  const [authorValue, setAuthorValue] = useState('');
  const [locationValue, setLocationValue] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [beforeDate, setBeforeDate] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [amount, setAmount] = useState<number>(0);

  const currentPage = useSelector((state: SliceProps) => state.currentPage);
  const pictures = useSelector((state: SliceProps) => state.pictures);

  const dispatch = useDispatch();

  const toggleTheme = () => {
    if (isDarkTheme === 'dark') {
      document.documentElement.classList.remove('root--dark');
      setIsDarkTheme('light');
    } else {
      document.documentElement.classList.add('root--dark');
      setIsDarkTheme('dark');
    }
  };

  useEffect(() => {
    let authorId = 0;
    let locationId = 0;
    Promise.all([
      Api.getSearchPictures(inputValue),
      Api.getSearchAuthorId(authorValue),
      Api.getSearchLocation(locationValue),
    ])
      .then(([name, author, location]) => {
        name = inputValue;
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
            setAmount(data.length);
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
        setAuthors(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    Api.getLocations()
      .then((data) => {
        setLocations(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className={cx('App', { 'App--dark': isDarkTheme === 'dark' })}>
      <Header toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      <Main
        inputValue={inputValue}
        setInputValue={setInputValue}
        fromDate={fromDate}
        setFromDate={setFromDate}
        beforeDate={beforeDate}
        setBeforeDate={setBeforeDate}
        authorValue={authorValue}
        setAuthorValue={setAuthorValue}
        locationValue={locationValue}
        setLocationValue={setLocationValue}
        pictures={pictures}
        authors={authors}
        locations={locations}
        isDarkTheme={isDarkTheme}
        pagesAmount={pagesAmount}
        amount={amount}
      />
    </div>
  );
}
