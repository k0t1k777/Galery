import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import styles from './App.module.scss';
import * as Api from '../../api/requests';
import { Pictures, Authors, Locations } from './../Main/Main';
import cn from 'classnames/bind';
import { pagesAmount } from '../utills/constants';

const cx = cn.bind(styles);

export default function App() {
  const [allPictures, setAllPictures] = useState<Pictures[]>([]);
  const [pictures, setPictures] = useState<Pictures[]>([]);
  const [authors, setAuthors] = useState<Authors[]>([]);
  const [locations, setLocations] = useState<Locations[]>([]);
  const [isDarkTheme, setIsDarkTheme] = useState('light');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [authorValue, setAuthorValue] = useState('');
  const [locationValue, setLocationValue] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [beforeDate, setBeforeDate] = useState('');
  const [amount, setAmount] = useState<number>(0);

  const toggleTheme = () => {
    const newTheme = isDarkTheme === 'dark' ? 'light' : 'dark';
    setIsDarkTheme(newTheme);
  };

  useEffect(() => {
    Api.getPictures()
      .then((data) => {
        setAllPictures(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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
        if (authorId || locationId || fromDate || beforeDate) {
          setCurrentPage(1)
        }
          Api.getPagination(
            currentPage,
            pagesAmount,
            authorId,
            locationId,
            fromDate,
            beforeDate
          )
            .then((data) => {
              setPictures(data);
            })
            .catch((error) => {
              console.error(error);
            });
        Api.getPaginationAmount(
          authorId,
          locationId,
          fromDate,
          beforeDate
        ).then((data) => {
          setAmount(data.length);
        });
      });
  }, [
    currentPage,
    pagesAmount,
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
        fromDate={fromDate}
        setFromDate={setFromDate}
        beforeDate={beforeDate}
        setBeforeDate={setBeforeDate}
        authorValue={authorValue}
        setAuthorValue={setAuthorValue}
        locationValue={locationValue}
        setLocationValue={setLocationValue}
        allPictures={allPictures}
        pictures={pictures}
        authors={authors}
        locations={locations}
        isDarkTheme={isDarkTheme}
        pagesAmount={pagesAmount}
        currentPage={currentPage}
        amount={amount}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
